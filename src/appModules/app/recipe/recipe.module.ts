import { NgModule } from '@angular/core';
import { SharedAppModule } from '../_shareModule/shared-app.module';
import { RecipeRoutingModule } from './recipe.routing';

@NgModule({
  declarations: [
  ],
  imports: [
    RecipeRoutingModule,
    SharedAppModule
  ]
})
export class RecipeModule { }
