import { Routes } from '@angular/router';
import TemplateComponent from '@app/appComponents/templates/environments/coreui/template/template.component';
import { SUB_PATHS } from '@app/_moduleTest/catalogs/pathsCatalog';
import { appAdminRoutes } from './admin/admin.routing';
import { appDatatableRoutes } from './datatable/app-datatable.routing';
import { appFormsRoutes } from './forms/forms.routing';

const routes: Routes = [{
  path: '',
  redirectTo: SUB_PATHS.DATATABLE.DATATABLEDATA.fullPath,
  pathMatch: "full"
},{
  path: '',
  component: TemplateComponent,
  children: [
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
    },
  ]
}];

export const appRoutes = routes;
