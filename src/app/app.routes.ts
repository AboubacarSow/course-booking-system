import { AboutCoursesComponent } from './about-courses/about-courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

export const routes: Routes = [
  {path:'', redirectTo: 'courses', pathMatch: 'full'},
  {path:'courses', component: CoursesListComponent},
  {path:'courses/:id', component: CourseDetailComponent},   
  {path:'about', component: AboutCoursesComponent },
  {path:'signUpToCourse', component: SignUpFormComponent },
  {
    path:'admin',
    loadChildren : ()=>  import ('./features/admin/admin.module').then(m=>m.AdminModule)
  }
];
