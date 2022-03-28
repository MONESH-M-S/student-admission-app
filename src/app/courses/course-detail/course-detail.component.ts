import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CourseApplyComponent } from '../course-apply/course-apply.component';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  courseDetail: any;
  id: string;
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        this.courseService
          .getCourseDetailById(params['id'])
          .subscribe((res) => {
            if (res.course != null) {
              this.courseDetail = res.course;
            }
          });
      }
    });
  }

  onOpenRegisterDialog() {
    let dialogRef = this.matDialog.open(CourseApplyComponent, {
      data: { courseDetail: this.courseDetail },
      width: '450px',
      hasBackdrop: true,
    });
    dialogRef.afterClosed().subscribe((res) => {});
  }
}
