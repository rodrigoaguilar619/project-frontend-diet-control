import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableDataComponent } from './datatable-data/datatable-data.component';
import { SUB_PATHS } from '../../../_moduleTest/catalogs/pathsCatalog';

const routes: Routes = [{
  path: SUB_PATHS.DATATABLE.DATATABLEDATA.path,
  component: DataTableDataComponent,
  pathMatch: 'full'
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DataTableRoutingModule { }
