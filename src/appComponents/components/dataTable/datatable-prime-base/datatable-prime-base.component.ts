import { Component, IterableDiffers } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DatatableGenericComponent } from '@app/appComponents/components/dataTable/datatable-generic/datatable-generic.component';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import ButtonsOptionsComponent from '@app/appComponents/components/buttons/buttons-options/buttons-options.component';

@Component({
  selector: 'app-datatable-prime-base',
  templateUrl: './datatable-prime-base.component.html',
  imports: [
    commonAppModules,
    TableModule,
    ButtonsOptionsComponent
  ],
})
export class DatatablePrimeBaseComponent extends DatatableGenericComponent {

  constructor(public override iterableDiffers: IterableDiffers) {
    super(iterableDiffers);
  }

}

export default DatatablePrimeBaseComponent;
