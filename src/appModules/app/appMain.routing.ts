import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import TemplateComponent from '../../appComponents/templates/environments/coreui/template/template.component';
import { SUB_PATHS } from '../catalogs/pathsCatalog';

const routes: Routes = [{
  path: '',
  redirectTo: SUB_PATHS.ADMIN.PRINCIPAL_PAGE.fullPath,
  pathMatch: "full"
},{
  path: '',
  component: TemplateComponent,
  children: [
    {
      path: SUB_PATHS.ADMIN.path,
      loadChildren: () => import('./admin/admin.module').then( (m) => m.AdminModule)
    },
    {
      path: SUB_PATHS.FOOD.path,
      loadChildren: () => import('./food/food.module').then( (m) => m.FoodModule)
    },
    {
      path: 'recipe',
      loadChildren: () => import('./recipe/recipe.module').then( (m) => m.RecipeModule)
    },
    {
      path: 'diet',
      loadChildren: () => import('./diet/diet.module').then( (m) => m.DietModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppMainRoutingModule {}