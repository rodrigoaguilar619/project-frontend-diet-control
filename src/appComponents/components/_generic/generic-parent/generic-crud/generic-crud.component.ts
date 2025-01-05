import { Component, Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputElementEnum } from '@app/appComponents/catalogs/enumCatalog';
import { GenericParentComponent } from '@app/appComponents/components/_generic/generic-parent/generic-parent.component';

@Component({
  selector: 'app-generic-crud',
  templateUrl: './generic-crud.component.html'
})
export class GenericCrudComponent extends GenericParentComponent {

  public inputElementEnum = InputElementEnum;
  public formBuilder = new FormBuilder();

  constructor(injector: Injector) {
    super(injector);
  }

}
