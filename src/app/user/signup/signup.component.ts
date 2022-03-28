import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  gender = ['Male', 'Female'];
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this._initUserForm();
  }

  onSubmit() {
    this.isLoading = true;
    if (this.form.invalid) {
      return;
    }
    const f = this.form.value;
    const userData = {
      name: f.name,
      email: f.email,
      password: f.password,
      phone: f.phone,
      gender: f.gender,
      location: f.location,
    };

    this.userService.userSignup(userData).subscribe((res) => {
      if (res.user) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `${res.message}`,
        });
        this.router.navigate([`u/${res.user._id}`]);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `${res.message}, Try Again Later`,
        });
      }
    });

    this.isLoading = false;
  }

  private _initUserForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      location: ['', [Validators.required]],
      phone: [0, Validators.required],
      gender: [''],
    });
  }
}
