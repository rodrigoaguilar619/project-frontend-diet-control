import { Routes } from '@angular/router';
import { SUB_PATHS } from '@app/appModules/catalogs/pathsCatalog';
import { LoginComponent } from '@app/appComponents/templates/logins/coreui/login.component';
import { AuthGuard } from '@app/appComponents/instances/authInstances/authGuard';
import { LogoutLayoutComponent } from '@app/appComponents/templates/environments/coreui/logout/logout.component';
import { appAdminRoutes } from './admin/admin.routing';
import { appFoodRoutes } from './food/food.routing';
import { appRecipeRoutes } from './recipe/recipe.routing';
import { appDietRoutes } from './diet/diet.routing';
import { _APP_ROUTE_START_ } from '@app/appComponents/catalogs/constantCatalog';

const appMainRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutLayoutComponent
  }
];

const appModuleRoutes: Routes = [
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

export function getRoutes(tempateComponent: any) {

  const routes: Routes = [{
    path: '',
    redirectTo: _APP_ROUTE_START_,
    pathMatch: "full"
  },
  {
    path: '',
    component: tempateComponent,
    children: appModuleRoutes
  },
  ...appMainRoutes
  ];

  return routes;

}
