import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormInputColumnPropsI } from '@app/appComponents/@types/components/formInputs/formInputs';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import FormInputElementComponent from '@app/appComponents/components/forms/form-input-element/form-input-element.component';
import FormInputValidatorComponent from '@app/appComponents/components/forms/form-input-validator/form-input-validator.component';

@Component({
  selector: 'app-form-input-column, [app-form-input-column]',
  templateUrl: './form-input-column.component.html',
  imports: [
      commonAppModules,
      FormInputElementComponent,
      FormInputValidatorComponent
    ]
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
