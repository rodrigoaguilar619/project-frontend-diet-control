import { Component, Input } from '@angular/core';
import { IButtonOptions } from '../../../../appComponents/@types/components/buttons/buttons';

@Component({
  selector: 'app-buttons-options',
  templateUrl: './buttons-options.component.html'
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