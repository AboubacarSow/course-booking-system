import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Student } from '../../../models/student.model';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {

  courses!: Course[] | null;
  students!: Student[] | null;
  loading: boolean= true
  errorMsg: string | null =null;
  constructor(private courseService: CourseService){}

  ngOnInit() : void{
    this.fetchStudents();
    this.fetchCourses();

  }

  fetchStudents(){
    this.courseService.getStudents().subscribe({
      next: (data:Student[])=>{
        this.students=data
        this.loading=false;
      },
      error: (err:any)=>{
        console.error("Error while fetching students data from server")
        this.errorMsg="Error while fetching students data from server. Please try again",
        this.loading=true;
      }
    })
  }

  fetchCourses(){
    this.courseService.getCourses().subscribe({
      next: (data:Course[])=>{
        this.courses=data
      },
      error: (err:any)=>{
        console.error("Error while fetching Courses data from server")
      }
    })
  }
  getCourseTitle(id:number) : string{
    const course=this.courses?.find(c=>c.id==id)
    return course ? course?.title : ",,"
  }
}
