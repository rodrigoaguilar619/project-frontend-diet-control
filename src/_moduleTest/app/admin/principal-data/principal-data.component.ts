import { Component, Injector } from '@angular/core';
import { GenericParentComponent } from '@app/appComponents/components/commonComponents.config';
import { setSubTitle } from '@app/appComponents/controller/actions/layout.actions';

@Component({
  selector: 'app-principal-data',
  templateUrl: './principal-data.component.html'
})
export class PrincipalDataComponent extends GenericParentComponent {

  constructor(injector: Injector) {
    super(injector);

    this.store.dispatch(setSubTitle({ subTitle: "Principal page" }));
  }

}
