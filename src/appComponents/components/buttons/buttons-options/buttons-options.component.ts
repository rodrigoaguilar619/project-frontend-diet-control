import { Component, Input } from '@angular/core';
import { IButtonOptions } from '@app/appComponents/@types/components/buttons/buttons';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';

@Component({
  selector: 'app-buttons-options',
  templateUrl: './buttons-options.component.html',
  imports: [
      commonAppModules
    ],
})
export class ButtonsOptionsComponent {

  @Input() buttonsOptions: IButtonOptions[];
  @Input() buttonStyles: {};
  @Input() rowData: any;
  @Input() rowIndex?: number;

  constructor() {
    this.buttonsOptions = [];
    this.buttonStyles = {};
  }

}

export default ButtonsOptionsComponent;
