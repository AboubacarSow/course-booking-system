import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,FormsModule} from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';
import { NgFor,NgIf } from '@angular/common';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-sign-up-form',
  imports: [NgFor,ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent implements OnInit {

  signUpForm!: FormGroup;
  courses: Course[] = [];
  isSucced: boolean= false;
  failureMsg : string | null='';
  successMsg: string | null= '';

  constructor(private formbuilder: FormBuilder, private courseService: CourseService) {
    this.signUpForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.email]],
      phoneNumber:['',[Validators.required]],
      enrolledCourseId: [null,[Validators.required]]
    });

    this.courseService.getCourses().subscribe({
      next:(data:Course[])=>{
        this.courses=data;
      },
      error:(err)=>{
        console.error('Error fetching courses for sign-up form:', err);
      }
    })
  }
  ngOnInit(): void {  
    console.log('SignUpFormComponent initialized');
  }

  get name(){
    return this.signUpForm.get('name');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get phoneNumber(){
    return this.signUpForm.get('phoneNumber');
  }
  get enrolledCourseId(){  
    return this.signUpForm.get('enrolledCourseId');
  } 
  onSubmit(): void{
    const newStudent: Student = {
      id:0,
      name:this.signUpForm.value.name,
      email:this.signUpForm.value.email,
      phoneNumber:this.signUpForm.value.phoneNumber,
      enrolledCourseIds:[this.signUpForm.value.enrolledCourseId]
    }
    this.courseService.addStudent(newStudent).subscribe({
      next:(data :Student)=>{
        this.isSucced=true;
        this.successMsg="Thanks for signing up. Our team will contact you soon";
        console.log(`Student successfully enrolled:`,data)
        this.signUpForm.reset()
      },
      error:(err)=>{
        this.isSucced=false;
        this.failureMsg="An error occured while submitting the form"
      }
    });
  }
}
