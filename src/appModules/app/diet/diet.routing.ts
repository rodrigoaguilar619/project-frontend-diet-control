import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import DietBaseRegisterComponent from './diet-main/diet-base-register/diet-base-register.component';
import { SUB_PATHS } from '@app/appModules/catalogs/pathsCatalog';
import DietCustomListComponent from './diet-main/diet-custom-list/diet-custom-list.component';
import DietCustomDetailsComponent from './diet-main/diet-custom-details/diet-custom-details.component';

const routes: Routes = [{
  path: SUB_PATHS.DIET.DIET_BASE_REGISTER.path,
  component: DietBaseRegisterComponent,
  pathMatch: 'full'
},
{
  path: SUB_PATHS.DIET.DIET_CUSTOM_LIST.path,
  component: DietCustomListComponent,
  pathMatch: 'full'
},
{
  path: SUB_PATHS.DIET.DIET_CUSTOM_DETAILS.path,
  component: DietCustomDetailsComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DietRoutingModule { }
