import { AbstractControl, ValidatorFn } from '@angular/forms';
import { FormInputColumnPropsI, FormInputContainerPropsI } from '../../@types/components/formInputs/formInputs';

export function setValidatorCustom(formControl: AbstractControl, validatorRules: ValidatorFn[], customValidatorFn: ValidatorFn): void {
    
    if (!validatorRules.includes(customValidatorFn)) {
      validatorRules.push(customValidatorFn);
    }

    formControl.setValidators(validatorRules);

    formControl.updateValueAndValidity({ emitEvent: false });
  }

  export function setValidatorCustomToContainer(formInputContainerProps: FormInputContainerPropsI, formControl: AbstractControl, inputId: string, customValidatorFn: ValidatorFn): void {
    
    formInputContainerProps.inputColumns.forEach((inputColumn: FormInputColumnPropsI) => {

        if (inputColumn.inputProps.id === inputId && inputColumn.validations) {
          setValidatorCustom(
            formControl,
            inputColumn.validations.validatorRules,
            customValidatorFn);
        }
      });
  }