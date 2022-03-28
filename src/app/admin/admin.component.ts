import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
    private router: Router
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

  showAdminAddDialog() {}

  showAllAdmin() {}

  viewMessages() {}
}
