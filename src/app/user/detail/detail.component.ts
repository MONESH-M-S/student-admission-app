import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id: string;
  userDetail: any;
  isLoading = false;
  userRegistrationDetails = [];
  totalNoOfRegistration = 0;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      if (params) {
        this.id = params['id'];
        this._getUserRegistrationDetail(params['id']);
        this.userService.getUserDetailById(params['id']).subscribe((res) => {
          if (res.user) {
            this.userDetail = res.user;
          }
        });
      }
      this.isLoading = false;
    });
  }

  editUserDetails() {
    if (this.id) {
      this.router.navigate([`u/${this.id}/edit`]);
    }
  }

  onClickRegistrationDetail() {
    this.router.navigate([`u/${this.id}/reg`]);
  }

  private _getUserRegistrationDetail(id: string) {
    this.userService.getUserRegistrationDetail(id).subscribe((res) => {
      this.totalNoOfRegistration = res.registers.length;
    });
  }
}
