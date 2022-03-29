import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { PrimengModule } from '../primeng.module';
import { DetailComponent } from './detail/detail.component';
import { ShowRegistrationsComponent } from './show-registrations/show-registrations.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent,
    DetailComponent,
    ShowRegistrationsComponent,
    SignupComponent,
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
    UserComponent,
    DetailComponent,
    ShowRegistrationsComponent,
    SignupComponent,
  ],
})
export class UserModule {}
