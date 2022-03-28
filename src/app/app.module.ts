import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SignupComponent } from './user/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './user/detail/detail.component';
import { AddedCoursesComponent } from './admin/added-courses/added-courses.component';
import { AddNewCourseComponent } from './admin/add-new-course/add-new-course.component';
import { DatePipe } from '@angular/common';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseApplyComponent } from './courses/course-apply/course-apply.component';
import { ViewCourseComponent } from './admin/view-course/view-course.component';
import { ContactComponent } from './contact/contact.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { ViewAllAdminComponent } from './admin/view-all-admin/view-all-admin.component';
import { ShowMessagesComponent } from './admin/show-messages/show-messages.component';
import { ShowRegistrationsComponent } from './user/show-registrations/show-registrations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    AdminComponent,
    UserComponent,
    SignupComponent,
    DetailComponent,
    AddedCoursesComponent,
    AddNewCourseComponent,
    CourseDetailComponent,
    CourseApplyComponent,
    ViewCourseComponent,
    ContactComponent,
    AddAdminComponent,
    ViewAllAdminComponent,
    ShowMessagesComponent,
    ShowRegistrationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MessageService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
