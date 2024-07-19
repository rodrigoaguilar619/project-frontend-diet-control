import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing';
import { SharedAppModule } from '../_shareModule/shared-app.module';

@NgModule({
  declarations: [
  ],
  imports: [
    AdminRoutingModule,
    SharedAppModule
  ]
})
export class AdminModule { }
