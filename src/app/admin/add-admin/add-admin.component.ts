import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss'],
})
export class AddAdminComponent implements OnInit {
  form: FormGroup;
  id: string;
  isLoading = false;
  constructor(
    private dialogRef: MatDialogRef<AddAdminComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { id: string },
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    if (this.data.id) {
      this.id = this.data.id;
      this._initForm();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmitForm() {
    this.isLoading = true;
    if (this.form.invalid) {
      return;
    }
    const f = this.form.value;
    const data = {
      name: f.name,
      email: f.email,
      password: f.password,
      isAdmin: true,
    };
    this.adminService.addNewAdmin(data).subscribe((res) => {
      if (res.user === null) {
        this.dialogRef.close();
        return this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `${res.message}`,
        });
      }
      this.dialogRef.close();
      return this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `Admin Created!`,
      });
    });
    this.isLoading = false;
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
