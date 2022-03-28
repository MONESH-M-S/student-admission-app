import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];
  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((res) => {
      if (res.courses.length > 0) {
        this.courses = res.courses;
      }
    });
  }

  onCardClick(id: string) {
    this.router.navigate([`c/${id}`]);
  }
}
