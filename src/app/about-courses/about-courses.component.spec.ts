import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoursesComponent } from './about-courses.component';

describe('AboutCoursesComponent', () => {
  let component: AboutCoursesComponent;
  let fixture: ComponentFixture<AboutCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
