import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-registrations',
  templateUrl: './show-registrations.component.html',
  styleUrls: ['./show-registrations.component.scss'],
})
export class ShowRegistrationsComponent implements OnInit {
  registrationDetail = [];
  isRegistrationAvailable = false;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params) {
        this.userService
          .getUserRegistrationDetail(params['id'])
          .subscribe((res) => {
            if (res.registers !== null) {
              this.isRegistrationAvailable = true;
              this.registrationDetail = res.registers;
            } else {
              this.isRegistrationAvailable = false;
            }
          });
      }
    });
  }

  onClickedEditRegisteration(rid: string, cid: string, uid: string) {
    this.router.navigate([`c/${cid}`], { queryParams: { r: rid, u: uid } });
  }
}
