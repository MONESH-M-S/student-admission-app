import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-view-registration-detail',
  templateUrl: './view-registration-detail.component.html',
  styleUrls: ['./view-registration-detail.component.scss'],
})
export class ViewRegistrationDetailComponent implements OnInit {
  status = ['Accept', 'Reject'];
  selectedStatus: string = '';
  isLoading = false;

  constructor(
    private dialogRef: MatDialogRef<ViewRegistrationDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  updateStatusValue() {
    this.isLoading = true;
    if (this.selectedStatus === '') return (this.isLoading = false);
    this.adminService
      .updateRegisterStatus(this.data.register._id, this.selectedStatus)
      .subscribe((res) => {
        if (res.register != null) {
          if (this.selectedStatus === 'Accept') {
            this.adminService
              .getCourseDetailById(res.register.courseId)
              .subscribe((res) => {
                if (res.course != null) {
                  let count = +res.course.count;
                  count += 1;

                  this.adminService
                    .updateCount(res.course._id, count)
                    .subscribe((res) => {
                      if (res.course) {
                        this.messageService.add({
                          severity: 'success',
                          summary: 'Success',
                          detail: res.message,
                        });
                        window.setTimeout(() => {
                          this.isLoading = false;
                          this.dialogRef.close();
                        }, 2500);
                      }
                    });
                } else {
                  this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: res.message,
                  });
                  this.isLoading = false;
                }
              });
          }
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: res.message,
          });
          this.isLoading = false;
        }
      });
  }
}
