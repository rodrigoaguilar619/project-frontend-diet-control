import { NgModule } from '@angular/core';
import { SharedAppModule } from '../../../_moduleTest/app/_shareModule/shared-app.module';
import { DataTableRoutingModule } from './app-datatable.routing';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedAppModule,
    DataTableRoutingModule
  ]
})
export class DataTableModule { }
