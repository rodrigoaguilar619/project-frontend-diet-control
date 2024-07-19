import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormInputColumnPropsI } from '../../../../appComponents/@types/components/formInputs/formInputs';

@Component({
  selector: 'app-form-input-column, [app-form-input-column]',
  templateUrl: './form-input-column.component.html'
})
export class FormInputColumnComponent implements OnInit {

  @Input() inputColumnProps!: FormInputColumnPropsI;
  @Input() valueFormControl!: FormControl;

  ngOnInit(): void {

    if (this.valueFormControl === undefined) {
      throw new Error('formControl is required');
    }

    if (this.inputColumnProps === undefined) {
      throw new Error('inputColumnProps is required');
    }
  }

}

export default FormInputColumnComponent;