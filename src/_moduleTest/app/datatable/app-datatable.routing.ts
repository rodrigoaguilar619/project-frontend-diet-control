import { Routes } from '@angular/router';
import { DataTableDataComponent } from './datatable-data/datatable-data.component';
import { SUB_PATHS } from '@app/_moduleTest/catalogs/pathsCatalog';

const routes: Routes = [{
  path: SUB_PATHS.DATATABLE.DATATABLEDATA.path,
  component: DataTableDataComponent,
  pathMatch: 'full'
}
];

export const appDatatableRoutes: Routes = routes;
