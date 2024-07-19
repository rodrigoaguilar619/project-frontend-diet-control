import { Component, Injector } from '@angular/core';
import { InputElementEnum } from '@app/appComponents/catalogs/enumCatalog';
import { GenericParentComponent } from '../generic-parent.component';
import { FormBuilder } from '@angular/forms';

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
