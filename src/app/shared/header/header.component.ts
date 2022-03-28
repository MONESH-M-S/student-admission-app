import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from 'src/app/user/user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visibleSidebar: boolean = false;
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openLoginDialog() {
    this.matDialog.open(UserComponent, {
      width: '400px',
      hasBackdrop: true,
      disableClose: true,
    });
  }
}
