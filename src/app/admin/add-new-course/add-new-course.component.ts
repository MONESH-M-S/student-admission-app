import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss'],
})
export class AddNewCourseComponent implements OnInit {
  form: FormGroup;
  id: string;
  isLoading = false;
  currentDateAndTime = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private messageService: MessageService,
    private router: Router,
    private datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params) {
        this.id = params['id'];
      }
    });
    this._initEventForm();
  }

  private _initEventForm() {
    this.form = this.formBuilder.group({
      courseName: ['', [Validators.required]],
      availableSeats: ['', [Validators.required]],
      lastDate: ['', [Validators.required]],
      description: ['', [Validators.required]],
      creator: [''],
    });
  }

  clearForm() {
    this.form.reset();
  }

  onSubmit() {
    this.isLoading = true;
    this.currentDateAndTime = this.datepipe.transform(
      new Date(),
      'dd/MM/yyyy h:mm'
    );
    if (this.form.invalid) {
      return;
    }
    const f = this.form.value;

    const form = {
      courseName: f.courseName,
      count: 0,
      availableSeats: f.availableSeats,
      description: f.description,
      lastDate: f.lastDate,
      createdAt: this.currentDateAndTime,
      creator: this.id,
    };

    this.adminService.addNewCourse(form).subscribe((res) => {
      if (res.course != null) {
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

    // this.form.reset();
    this.isLoading = false;
  }
}
