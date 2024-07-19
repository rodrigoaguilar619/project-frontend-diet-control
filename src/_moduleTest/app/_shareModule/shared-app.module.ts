import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../../appComponents/components/components.module';
import { PrincipalDataComponent } from '../../../_moduleTest/app/admin/principal-data/principal-data.component';
import { DataTableDataComponent } from '../../../_moduleTest/app/datatable/datatable-data/datatable-data.component';
import { FormContainerComponent } from '../../../_moduleTest/app/forms/form-container/form-container.component';
import { FormContainersComponent } from '../../../_moduleTest/app/forms/form-containers/form-containers.component';
import { FormDynamicRowComponent } from '../../../_moduleTest/app/forms/form-dynamic-row/form-dynamic-row.component';
import { FormElementsComponent } from '../../../_moduleTest/app/forms/form-elements/form-elements.component';


@NgModule({
  declarations: [
    PrincipalDataComponent,
    DataTableDataComponent,
    FormElementsComponent,
    FormContainerComponent,
    FormContainersComponent,
    FormDynamicRowComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    PrincipalDataComponent,
    DataTableDataComponent,
    FormElementsComponent,
    FormContainerComponent,
    FormContainersComponent,
    FormDynamicRowComponent
  ],
})

export class SharedAppModule {}
