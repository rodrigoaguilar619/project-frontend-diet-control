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
      throw new Error('[FormInputContainerComponent] formGroup input is required');
    }

    if (this.inputContainer === undefined) {
      throw new Error('[FormInputContainerComponent] inputContainer input is required');
    }
  }

  castFormControl(formControl: AbstractControl | null | undefined): FormControl {
    if (!formControl) {
      throw new Error('[FormInputContainerComponent] Missing FormControl when casting');
    }
    return formControl as FormControl;
  }

}

export default FormInputContainerComponent;
