import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule, SidebarModule } from '@coreui/angular';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HeaderModule,
    SidebarModule,
    NgxSpinnerModule,
    ToastModule,
  ],
  exports: [
    BrowserAnimationsModule,
    HeaderModule,
    SidebarModule,
    NgxSpinnerModule,
    ToastModule
  ],
})
export class LayoutModule { }
