import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../models/course.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit{

  createCourseform!:FormGroup;

  constructor(private formBuilder: FormBuilder,private courseService: CourseService){

  }

  ngOnInit() : void{
    this.createCourseform= this.formBuilder.group({
      title:['',[Validators.required]],
      description:['',[Validators.required, Validators.minLength(6)]],
      price:['',[Validators.required]],
      date:['',[Validators.required]],
      imageUrl:[''],
      onSale:['']
    })
  }

  get title(){return this.createCourseform.get('title');}
  get description(){return this.createCourseform.get('description')}
  get price(){return this.createCourseform.get('price')}
  get date(){return this.createCourseform.get('date')}
  get imageUrl(){return this.createCourseform.get('imageUrl')}
  get onSale() {return this.createCourseform.get('onSale')}


  onSubmit(){
    const course: Course = {
      id:0,
      title:this.createCourseform.value.title,
      description:this.createCourseform.value.description,
      price:this.createCourseform.value.price,
      imageUrl:this.createCourseform.value.imageUrl,
      date:this.createCourseform.value.date,
      onSale:this.createCourseform.value.onSale
    }
    this.courseService.addCourse(course).subscribe({
      next:(data: Course)=>{
        console.log("course added",data)
        alert(' ✓ Course successfully added')
        this.createCourseform.reset();
      },
      error:(err:any)=>{
        console.error("An error occur while adding a course",err)
      }
    })
  }
}
