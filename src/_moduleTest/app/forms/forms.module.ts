import { NgModule } from '@angular/core';
import { SharedAppModule } from '../../../_moduleTest/app/_shareModule/shared-app.module';
import { FormsRoutingModule } from './forms.routing';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedAppModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
