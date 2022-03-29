import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { PrimengModule } from '../primeng.module';
import { CourseApplyComponent } from './course-apply/course-apply.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [CoursesComponent, CourseApplyComponent, CourseDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CoursesComponent, CourseApplyComponent, CourseDetailComponent],
})
export class CourseModule {}
