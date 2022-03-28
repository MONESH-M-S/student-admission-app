import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private courseService: CourseService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.courseService
    const f = {
      userName: this.form.value.userName,
      email: this.form.value.email,
      courseId: this.data.course._id,
    };
    this.courseService.registerForACourse(f).subscribe((res) => {
      if (res.register != null) {
        this.courseService
          .updateCount(this.data.course._id)
          .subscribe((res) => {});
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message,
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: res.message,
        });
      }
    });
  }

  // onUpload(event: any) {
  //   console.log('event')
  //   const file = event.files[0];
  //   this.form.patchValue({ image: file });
  //   this.form.get('image').updateValueAndValidity();
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imageDisplay = reader.result as string;
  //   };
  //   reader.readAsDataURL(file);
  // }

  private _initForm() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
