import { NgModule } from '@angular/core';
import { SharedAppModule } from '../_shareModule/shared-app.module';
import { DietRoutingModule } from './diet.routing';

@NgModule({
  declarations: [
  ],
  imports: [
    DietRoutingModule,
    SharedAppModule
  ]
})
export class DietModule { }
