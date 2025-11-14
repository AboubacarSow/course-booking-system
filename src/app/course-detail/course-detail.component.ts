import { CourseService } from './../services/course.service';
import { CurrencyPipe, NgIf, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [NgIf, CurrencyPipe, DatePipe, RouterModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit{
   course : Course| null =null;
  constructor(private courseServervice :CourseService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
         const id = +idParam;
        this.loadCourseById(id);
      }
    })

  }

  loadCourseById(id:number):void{
    this.courseServervice.getCourseById(id).subscribe({
      next:(data : Course ) => {
        this.course=data; 
      },  
      error :(err)=>{
        console.error('Error fetching course details:', err);
      }
    });}


}
