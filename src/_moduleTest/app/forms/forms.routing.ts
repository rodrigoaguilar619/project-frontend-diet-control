import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormContainersComponent } from './form-containers/form-containers.component';
import { FormDynamicRowComponent } from './form-dynamic-row/form-dynamic-row.component';
import { SUB_PATHS } from '@app/_moduleTest/catalogs/pathsCatalog';

const routes: Routes = [{
  path: SUB_PATHS.FORMS.FORMINPUTELEMENTS.path,
  component: FormElementsComponent,
  pathMatch: 'full'
},
{
  path: SUB_PATHS.FORMS.FORMINPUTCONTAINER.path,
  component: FormContainerComponent,
  pathMatch: 'full'
},
{
  path: SUB_PATHS.FORMS.FORMINPUTCONTAINERS.path,
  component: FormContainersComponent,
  pathMatch: 'full'
},
{
  path: SUB_PATHS.FORMS.FORMINPUTDYNAMICROW.path,
  component: FormDynamicRowComponent,
  pathMatch: 'full'
},
];

export const appFormsRoutes: Routes = routes;
