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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseApplyComponent } from './courses/course-apply/course-apply.component';
import { ContactComponent } from './contact/contact.component';
import { ViewRegistrationDetailComponent } from './admin/view-course/view-registration-detail/view-registration-detail.component';
import { HeroComponent } from './home/hero/hero.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ViewRegistrationDetailComponent,
    HeroComponent,
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
    AdminModule,
    UserModule,
    CourseModule
  ],
  providers: [MessageService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
