import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  adminDetails: any;
  id: string;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        this.adminService.getAdminDetailById(params['id']).subscribe((res) => {
          if (res.user) {
            this.adminDetails = res.user;
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Admin Verified!',
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Admin Verification Failed!',
            });
            this.router.navigate(['']);
          }
        });
      }
    });
  }

  addNewEvent() {
    this.router.navigate([`a/${this.id}/add-course`]);
  }

  showAdminAddDialog() {
    let dialogRef = this.dialog.open(AddAdminComponent, {
      data: { id: this.id },
      width: '450px',
      hasBackdrop: true,
      disableClose: true,
    });
  }

  showAllAdmin() {
    this.router.navigate(['a/show-all']);
  }

  viewMessages() {
    this.router.navigate(['a/show-messages']);
  }
}
