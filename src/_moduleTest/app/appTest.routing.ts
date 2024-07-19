import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import TemplateComponent from '../../appComponents/templates/environments/coreui/template/template.component';
import { SUB_PATHS } from '../catalogs/pathsCatalog';

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
      loadChildren: () => import('./admin/admin.module').then( (m) => m.AdminModule)
    },
    {
      path: SUB_PATHS.DATATABLE.path,
      loadChildren: () => import('./datatable/datatable.module').then( (m) => m.DataTableModule),
      
    },
    {
      path: SUB_PATHS.FORMS.path,
      loadChildren: () => import('./forms/forms.module').then((m) => m.FormsModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}