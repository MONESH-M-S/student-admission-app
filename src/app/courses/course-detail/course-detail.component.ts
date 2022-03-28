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
  rid: string = '';
  uid: string = '';
  registerationDetail: any;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      this.rid = params.params.r;
      this.uid = params.params.u;
      this._editRegistrationDetails();
    });
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

  private _editRegistrationDetails() {
    if (this.rid == '' || this.uid == '') return;

    this.courseService.getRegistrationDetailById(this.rid).subscribe((res) => {
      if (res.register != null) {
        this.registerationDetail = res.register;
        let dialogRef = this.matDialog.open(CourseApplyComponent, {
          data: {
            courseDetail: this.courseDetail,
            registerationDetail: this.registerationDetail,
          },
          width: '450px',
          hasBackdrop: true,
        });
        dialogRef.afterClosed().subscribe((res) => {});
      }
    });
  }
}
