import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-all-admin',
  templateUrl: './view-all-admin.component.html',
  styleUrls: ['./view-all-admin.component.scss'],
})
export class ViewAllAdminComponent implements OnInit {
  admins = [];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllAdmins().subscribe((res) => {
      if (res.admins.length > 0) {
        this.admins = res.admins;
      }
    });
  }
}
