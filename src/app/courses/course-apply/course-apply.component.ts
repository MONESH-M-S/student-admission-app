import { DatePipe } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-apply',
  templateUrl: './course-apply.component.html',
  styleUrls: ['./course-apply.component.scss'],
})
export class CourseApplyComponent implements OnInit {
  form: FormGroup;
  imageDisplay: any;
  userId: string;
  isLoading = false;
  constructor(
    private courseService: CourseService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CourseApplyComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private messageService: MessageService,
    private datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this._initForm(null);
    if (this.data.registerationDetail) {
      this._initForm(this.data.registerationDetail);
    }
  }

  onSubmit() {
    if (this.data.registerationDetail) {
      return this._afterEditedSubmitForm();
    }
    this.isLoading = true;
    if (this.form.invalid) return;
    this.courseService
      .getUserDetailByEmail(this.form.value.email)
      .subscribe((res) => {
        if (res.user != null) {
          this.userId = res.user._id;
          const f = {
            userName: this.form.value.userName,
            email: this.form.value.email,
            image: this.form.value.image,
            courseName: this.data.courseDetail.courseName,
            courseId: this.data.courseDetail._id,
            userId: this.userId,
            registeredAt: this.datepipe.transform(
              new Date(),
              'dd/MM/yyyy h:mm'
            ),
          };

          this.courseService
            .checkUserAlreadyRegistered(f.email, f.courseId)
            .subscribe((res) => {
              if (res.register === null) {
                this.courseService.registerForACourse(f).subscribe((res) => {
                  if (res.register != null) {
                    this.messageService.add({
                      severity: 'success',
                      summary: 'Success',
                      detail: res.message,
                    });
                    window.setTimeout(() => {
                      this.isLoading = false;
                      this.dialogRef.close();
                    }, 2500);
                  } else {
                    this.isLoading = false;

                    this.messageService.add({
                      severity: 'error',
                      summary: 'Error',
                      detail: res.message,
                    });
                  }
                });
              } else {
                this.isLoading = false;
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: res.message,
                });
              }
            });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: res.message,
          });
          return window.setTimeout(() => {
            this.isLoading = false;
            this.dialogRef.close();
            this.router.navigate(['u/signup']);
          }, 3000);
        }
      });
  }

  onUpload(event: any) {
    console.log('event');
    const file = event.files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imageDisplay = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  private _initForm(f: any) {
    if (f == null) {
      this.form = this.formBuilder.group({
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        image: [''],
      });
    } else {
      this.form = this.formBuilder.group({
        userName: [f.userName, Validators.required],
        email: [f.email, [Validators.required, Validators.email]],
      });
    }
  }

  private _afterEditedSubmitForm() {
    this.isLoading = true;
    const value = {
      userName: this.form.value.userName,
      email: this.form.value.email,
      rid: this.data.registerationDetail._id,
    };
    this.courseService
      .getUserDetailByEmail(this.form.value.email)
      .subscribe((res) => {
        if (res.user != null) {
          this.courseService
            .updateRegisterationValues(value)
            .subscribe((res) => {
              if (res.register) {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: res.message,
                });
                window.setTimeout(() => {
                  this.isLoading = false;
                  this.dialogRef.close();
                }, 2500);
              } else {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: res.message,
                });
                window.setTimeout(() => {
                  this.isLoading = false;
                  this.dialogRef.close();
                }, 2500);
              }
            });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: res.message,
          });
          return window.setTimeout(() => {
            this.isLoading = false;
            this.dialogRef.close();
            this.router.navigate(['u/signup']);
          }, 3000);
        }
      });
  }
}
