import { Component, IterableDiffers } from '@angular/core';
import { DatatableGenericComponent } from '../../../../appComponents/components/dataTable/datatable-generic/datatable-generic.component';

@Component({
  selector: 'app-datatable-prime-base',
  templateUrl: './datatable-prime-base.component.html'
})
class DatatablePrimeBaseComponent extends DatatableGenericComponent {

  constructor(public iterableDiffers: IterableDiffers) {
    super(iterableDiffers);
  }

}

export default DatatablePrimeBaseComponent;