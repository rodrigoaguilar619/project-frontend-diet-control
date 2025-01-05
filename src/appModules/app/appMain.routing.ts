import { Routes } from '@angular/router';
import TemplateComponent from '@app/appComponents/templates/environments/coreui/template/template.component';
import { SUB_PATHS } from '@app/appModules/catalogs/pathsCatalog';
import { LoginComponent } from '@app/appComponents/templates/logins/coreui/login.component';
import { AuthGuard } from '@app/appComponents/instances/authInstances/authGuard';
import { LogoutLayoutComponent } from '@app/appComponents/templates/environments/coreui/logout/logout.component';
import { appAdminRoutes } from './admin/admin.routing';
import { appFoodRoutes } from './food/food.routing';
import { appRecipeRoutes } from './recipe/recipe.routing';
import { appDietRoutes } from './diet/diet.routing';

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
      children: appAdminRoutes
    },
    {
      path: SUB_PATHS.FOOD.path,
      canActivate: [AuthGuard],
      children: appFoodRoutes
    },
    {
      path: 'recipe',
      canActivate: [AuthGuard],
      children: appRecipeRoutes
    },
    {
      path: 'diet',
      canActivate: [AuthGuard],
      children: appDietRoutes
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

export const appRoutes: Routes = routes;
