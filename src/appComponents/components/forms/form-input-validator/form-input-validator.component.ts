import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input-validator, [app-form-input-validator]',
  templateUrl: './form-input-validator.component.html'
})
export class FormInputValidatorComponent implements OnInit {

  @Input() valueFormControl!: FormControl;

  ngOnInit(): void {

    if (this.valueFormControl === undefined) {
      throw new Error('formControl is requireds');
    }
  }

  getErrorMessage(control: AbstractControl): string | undefined {

    if (!control.errors) {
      return undefined;
    }

    let errorType = Object.keys(control.errors ?? {})[0];

    switch (errorType) {
      case "required":
        return "Field required";
      case "min":
        return "Min length is " + control.errors?.min.min;
      case "max":
        return "Max length is " + control.errors?.max.max;
      case "email":
        return "Invalid email";
      case "forbiddenName":
        return "Name cannot be " + control.errors?.forbiddenName.value;
      case "pattern":
        return "Invalid format. Must match: " + control.errors?.pattern.requiredPattern;
      default:
        return control.errors[errorType];
    }
  }

}

export default FormInputValidatorComponent;