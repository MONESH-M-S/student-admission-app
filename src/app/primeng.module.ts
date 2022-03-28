import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [SidebarModule],
  exports: [SidebarModule],
})
export class PrimengModule {}
