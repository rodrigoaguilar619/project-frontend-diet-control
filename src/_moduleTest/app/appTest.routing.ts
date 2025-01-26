import { Routes } from '@angular/router';
import { SUB_PATHS } from '@app/_moduleTest/catalogs/pathsCatalog';
import { appAdminRoutes } from './admin/admin.routing';
import { appDatatableRoutes } from './datatable/app-datatable.routing';
import { appFormsRoutes } from './forms/forms.routing';
import { LoginComponent } from '@app/appComponents/templates/logins/coreui/login.component';
import { LogoutLayoutComponent } from '@app/appComponents/templates/environments/coreui/logout/logout.component';


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
    children: appAdminRoutes
  },
  {
    path: SUB_PATHS.DATATABLE.path,
    children: appDatatableRoutes
  },
  {
    path: SUB_PATHS.FORMS.path,
    children: appFormsRoutes
  }
]

export function getRoutes(tempateComponent: any) {

  const routes: Routes = [{
    path: '',
    redirectTo: SUB_PATHS.DATATABLE.DATATABLEDATA.fullPath,
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
