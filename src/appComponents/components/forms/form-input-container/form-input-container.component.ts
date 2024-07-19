import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

import { FormInputColumnPropsI, FormInputContainerPropsI } from '../../../../appComponents/@types/components/formInputs/formInputs';

/*function splitColumnInputs(arr: FormInputColumnPropsI[], chunkSize: number): FormInputColumnPropsI[][] {
  const result: FormInputColumnPropsI[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}*/

@Component({
  selector: 'app-form-input-container, [app-form-input-container]',
  templateUrl: './form-input-container.component.html'
})
export class FormInputContainerComponent implements OnInit {

  @Input() inputContainer!: FormInputContainerPropsI;
  @Input() formGroup!: FormGroup;

  //public rowInputColumns!: FormInputColumnPropsI[][];

  ngOnInit(): void {

    if (this.formGroup === undefined) {
      throw new Error('formGroup is required');
    }

    if (this.inputContainer === undefined) {
      throw new Error('inputContainer is required');
    }

    //this.rowInputColumns = splitColumnInputs(this.inputContainer.inputColumns, this.inputContainer.columnstotal);
  }

  castFormControl(formControl: AbstractControl) {
    return formControl as FormControl;
  }

}

export default FormInputContainerComponent;