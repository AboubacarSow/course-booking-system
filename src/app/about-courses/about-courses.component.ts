import { Component } from '@angular/core';
import {RouterOutlet, RouterModule,RouterLink} from '@angular/router'

@Component({
  selector: 'app-about-courses',
    imports: [RouterOutlet, RouterModule, RouterLink],
  templateUrl: './about-courses.component.html',
  styleUrl: './about-courses.component.css'
})
export class AboutCoursesComponent {

}
