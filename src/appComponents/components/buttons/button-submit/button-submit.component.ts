import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
})
export class ButtonSubmitComponent {

  @Input() title = "Save";
  @Input() clickFunction: Function = function () { };

  constructor() {
  }

}

export default ButtonSubmitComponent;