import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

import { FormInputContainerPropsI } from '@app/appComponents/@types/components/formInputs/formInputs';
import FormInputElementComponent from '@app/appComponents/components/forms/form-input-element/form-input-element.component';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import FormInputColumnComponent from '@app/appComponents/components/forms/form-input-column/form-input-column.component';

@Component({
  selector: 'app-form-input-container, [app-form-input-container]',
  templateUrl: './form-input-container.component.html',
  imports: [
    commonAppModules,
    FormInputElementComponent,
    FormInputColumnComponent
  ]
})
export class FormInputContainerComponent implements OnInit {

  @Input() inputContainer!: FormInputContainerPropsI;
  @Input() formGroup!: FormGroup;

  ngOnInit(): void {

    if (this.formGroup === undefined) {
      throw new Error('formGroup is required');
    }

    if (this.inputContainer === undefined) {
      throw new Error('inputContainer is required');
    }
  }

  castFormControl(formControl: AbstractControl) {
    return formControl as FormControl;
  }

}

export default FormInputContainerComponent;
