import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<UserComponent>,
    private messageService: MessageService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {
    if (!form.value.email) {
      return this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Enter a Valid Email',
      });
    } else if (!form.value.password || form.invalid) {
      return this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Enter Valid Password',
      });
    }
    if (form.valid && form.value.email && form.value.password) {
      const data = { email: form.value.email, password: form.value.password };

      this.userService.userLogin(data).subscribe((res) => {
        console.log(res);
        if (res.user == null) {
          return this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${res.message}`,
          });
        } else {
          if (res.user.isAdmin == true) {
            this.dialogRef.close();
            this.router.navigate([`a/${res.user._id}`]);
          } else {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Login Successfull',
            });
            this.dialogRef.close();
            this.router.navigate([`u/${res.user._id}`]);
          }
        }
        // this.adminService.isAdmin = false;
      });
    }
  }

  onSignup() {
    this.dialogRef.close();
    this.router.navigate(['u/signup']);
  }
}
