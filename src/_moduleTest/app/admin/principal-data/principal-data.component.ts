import { Component, Injector } from '@angular/core';
import { GenericParentComponent } from '../../../../appComponents/_generic/generic-parent/generic-parent.component';
import { setTitle } from '../../../../appComponents/controller/actions/layout.actions';

@Component({
  selector: 'app-principal-data',
  templateUrl: './principal-data.component.html'
})
export class PrincipalDataComponent extends GenericParentComponent {

  constructor(injector: Injector) {
    super(injector);

    this.store.dispatch(setTitle({ title: "Principal page" }));
  }

}
