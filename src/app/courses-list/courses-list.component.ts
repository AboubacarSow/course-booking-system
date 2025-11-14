import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from './../models/course.model';
import { Component, OnInit } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { CourseCardComponent } from "../course-card/course-card.component";
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-courses-list',
  imports: [NgFor, NgIf, CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit{
  title:string = 'Available Courses';
  courses: Course[] = [];
  wishlist:Course[]=[];
 
  constructor(private courseService : CourseService,
    private activatedRoute :ActivatedRoute, 
    private router: Router ){

  }
  ngOnInit() : void{
    this.activatedRoute.queryParamMap.subscribe(params =>{
     const desc= params.get('description');
     if(desc){
      this.loadCourses(desc);
     }
     else{
      this.loadCourses();
     }
  })
  }

  loadCourses(description?: string | null):void{
    this.courseService.getCourses(description).subscribe({
      next:(data : Course[] ) => {
        this.courses=data;
      },
      error:(err)=>{
        console.error('Error fetching courses:', err);
      }
    });
  }
  onAddToWishList(course:Course):void{
    this.wishlist.push(course);
  }
  onBookCourse(course:Course):void{
    this.courseService.setSelectedCourse(course);
  }
}
