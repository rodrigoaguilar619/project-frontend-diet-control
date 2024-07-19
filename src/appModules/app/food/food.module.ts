import { NgModule } from '@angular/core';
import { FoodRoutingModule } from './food.routing';
import { SharedAppModule } from '../_shareModule/shared-app.module';

@NgModule({
  declarations: [
  ],
  imports: [
    FoodRoutingModule,
    SharedAppModule
  ]
})
export class FoodModule { }
