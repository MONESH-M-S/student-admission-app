import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCourseComponent } from './admin/add-new-course/add-new-course.component';
import { AdminComponent } from './admin/admin.component';
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
      { path: ':id', component: AdminComponent },
      { path: ':id/add-course', component: AddNewCourseComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
