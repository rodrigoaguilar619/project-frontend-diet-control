import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalDataComponent } from './principal-data/principal-data.component';
import { SUB_PATHS } from '@app/appModules/catalogs/pathsCatalog';

const routes: Routes = [{
  path: SUB_PATHS.ADMIN.PRINCIPAL_PAGE.path,
  component: PrincipalDataComponent,
  pathMatch: 'full'
}
];

export const appAdminRoutes: Routes = routes;
