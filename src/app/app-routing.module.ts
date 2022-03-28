import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCourseComponent } from './admin/add-new-course/add-new-course.component';
import { AdminComponent } from './admin/admin.component';
import { ShowMessagesComponent } from './admin/show-messages/show-messages.component';
import { ViewAllAdminComponent } from './admin/view-all-admin/view-all-admin.component';
import { ViewCourseComponent } from './admin/view-course/view-course.component';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './user/detail/detail.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'u',
    children: [
      { path: 'signup', component: SignupComponent },
      { path: ':id', component: DetailComponent },
    ],
  },
  {
    path: 'a',
    children: [
      { path: 'show-all', component: ViewAllAdminComponent },
      { path: 'show-messages', component: ShowMessagesComponent },
      { path: ':id', component: AdminComponent },
      { path: ':id/add-course', component: AddNewCourseComponent },
      { path: 'c/:cid', component: ViewCourseComponent },
    ],
  },
  {
    path: 'c',
    children: [
      { path: '', component: CoursesComponent },
      { path: ':id', component: CourseDetailComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
