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
          window.setTimeout(() => {
            this.dialogRef.close();
            this.isLoading = false;
          }, 2500);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: res.message,
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
}
