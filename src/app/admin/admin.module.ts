import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { PrimengModule } from '../primeng.module';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { AddedCoursesComponent } from './added-courses/added-courses.component';
import { AdminComponent } from './admin.component';
import { ShowMessagesComponent } from './show-messages/show-messages.component';
import { ViewAllAdminComponent } from './view-all-admin/view-all-admin.component';
import { ViewCourseComponent } from './view-course/view-course.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddAdminComponent,
    AddNewCourseComponent,
    AddedCoursesComponent,
    ShowMessagesComponent,
    ViewAllAdminComponent,
    ViewCourseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AdminComponent,
    AddAdminComponent,
    AddNewCourseComponent,
    AddedCoursesComponent,
    ShowMessagesComponent,
    ViewAllAdminComponent,
    ViewCourseComponent,
  ],
})
export class AdminModule {}
