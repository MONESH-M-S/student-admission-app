import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserComponent } from 'src/app/user/user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visibleSidebar: boolean = false;
  constructor(private matDialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  openLoginDialog() {
    this.matDialog.open(UserComponent, {
      width: '400px',
      hasBackdrop: true,
      disableClose: true,
    });
  }

  navigateTo(route: string) {
    this.visibleSidebar = false;
    this.router.navigate([route]);
  }
}
