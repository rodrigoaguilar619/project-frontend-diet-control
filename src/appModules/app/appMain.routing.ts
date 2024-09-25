import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import TemplateComponent from '../../appComponents/templates/environments/coreui/template/template.component';
import { SUB_PATHS } from '../catalogs/pathsCatalog';
import { LoginComponent } from '@app/appComponents/templates/logins/coreui/login.component';
import { AuthGuard } from '@app/appComponents/instances/authInstances/authGuard';
import { LogoutLayoutComponent } from '@app/appComponents/templates/environments/coreui/logout/logout.component';

const routes: Routes = [{
  path: '',
  redirectTo: SUB_PATHS.ADMIN.PRINCIPAL_PAGE.fullPath,
  pathMatch: "full"
},
{
  path: '',
  component: TemplateComponent,
  children: [
    {
      path: SUB_PATHS.ADMIN.path,
      canActivate: [AuthGuard],
      loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
    },
    {
      path: SUB_PATHS.FOOD.path,
      canActivate: [AuthGuard],
      loadChildren: () => import('./food/food.module').then((m) => m.FoodModule)
    },
    {
      path: 'recipe',
      canActivate: [AuthGuard],
      loadChildren: () => import('./recipe/recipe.module').then((m) => m.RecipeModule)
    },
    {
      path: 'diet',
      canActivate: [AuthGuard],
      loadChildren: () => import('./diet/diet.module').then((m) => m.DietModule)
    },
  ]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'logout',
  component: LogoutLayoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppMainRoutingModule { }
