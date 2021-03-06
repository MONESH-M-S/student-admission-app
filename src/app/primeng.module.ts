import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';

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
    CalendarModule,
    EditorModule,
    TableModule,
    TooltipModule,
    FileUploadModule,
    InputTextareaModule,
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
    CalendarModule,
    EditorModule,
    TableModule,
    TooltipModule,
    FileUploadModule,
    InputTextareaModule,
  ],
})
export class PrimengModule {}
