import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export class ValidatorsCustom extends Validators {

  static customValidatorRange(minRangeControl: AbstractControl, maxRangeControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const minRange = minRangeControl.value;
      const maxRange = maxRangeControl.value;
      
      if (control.value !== null && (isNaN(control.value) || control.value < minRange || control.value > maxRange)) {
        return { ageRange: `Range must be between ${minRange} and ${maxRange}` };
      }
      return null;
    };
  }
}
