import { NgIf, DatePipe, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Course} from '../models/course.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [NgIf,DatePipe, CurrencyPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course: any;
  @Output() bookCourse = new EventEmitter<Course>();

  @Output() onAddToWishList = new EventEmitter<Course>();


  constructor(private router : Router){}
  addToWishlist(): void {
    this.onAddToWishList.emit(this.course);
  }

  onBookCourse(): void {
    this.bookCourse.emit(this.course);
  }

  showDetails(id:number): void{
    this.router.navigate(['/courses', id]);
  }

 
}
