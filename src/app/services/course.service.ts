import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private  baseurl : string ='http://localhost:3000';
  private selectedCourse: Course | null = null;
  constructor(private http :HttpClient) { }

   getCourses(description?: string | null) : Observable<Course[]> {
    let url = `${this.baseurl}/courses`;
    if (description) {
      url += `?description=${encodeURIComponent(description)}`;
    }
     return this.http.get<Course[]>(url);
  }
  addCourse(course: Course) : Observable<Course> {
    return this.http.post<Course>(`${this.baseurl}/courses`, course);
  }
  getCourseById(id:number): Observable<Course>{
    return this.http.get<Course>(`${this.baseurl}/courses/${id}`);
  }
  setSelectedCourse(course: Course): void {
    this.selectedCourse = course;
  }
  getSelectedCourse(): Course | null{
    return this.selectedCourse;
  }

  getStudents() : Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseurl}/students`);
  }
  addStudent(newStudent: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseurl}/students`,newStudent)
  }
}
