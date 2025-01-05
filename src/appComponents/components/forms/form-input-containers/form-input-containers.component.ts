import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputContainerPropsI } from '@app/appComponents/@types/components/formInputs/formInputs';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import FormInputContainerComponent from '@app/appComponents/components/forms/form-input-container/form-input-container.component';

@Component({
  selector: 'app-form-input-containers, [app-form-input-containers]',
  templateUrl: './form-input-containers.component.html',
  imports: [
    commonAppModules,
    FormInputContainerComponent
  ]
})
export class FormInputContainersComponent implements OnInit {

  @Input() inputContainers!: FormInputContainerPropsI[];
  @Input() formGroup!: FormGroup;

  ngOnInit(): void {

    if (this.formGroup === undefined) {
      throw new Error('formGroup is required');
    }

    if (this.inputContainers === undefined) {
      throw new Error('inputContainers is required');
    }
  }

}

export default FormInputContainersComponent;
