import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-added-courses',
  templateUrl: './added-courses.component.html',
  styleUrls: ['./added-courses.component.scss'],
})
export class AddedCoursesComponent implements OnInit {
  availableCourses = [];
  isCourseAvailable = false;
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.adminService
          .getCoursesAddedByAdminID(params['id'])
          .subscribe((res) => {
            if (res.courses.length > 0) {
              this.isCourseAvailable = true;
              this.availableCourses = res.courses;
            } else {
              this.isCourseAvailable = false;
            }
          });
      }
    });
  }

  onViewCourse(id: string) {
    this.router.navigate([`a/c/${id}`]);
  }
}
