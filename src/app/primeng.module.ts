import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    SidebarModule,
    ToastModule,
    ProgressSpinnerModule,
    CardModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    DropdownModule,
  ],
  exports: [
    SidebarModule,
    ToastModule,
    ProgressSpinnerModule,
    CardModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    DropdownModule,
  ],
})
export class PrimengModule {}
