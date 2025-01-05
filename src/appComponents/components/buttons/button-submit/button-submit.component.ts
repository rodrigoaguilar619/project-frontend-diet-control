import { Component, Input } from '@angular/core';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  imports: [
      commonAppModules,
    ]

})
export class ButtonSubmitComponent {

  @Input() title = "Save";
  @Input() clickFunction: Function = function () { };

  constructor() {
  }

}

export default ButtonSubmitComponent;
