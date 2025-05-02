import { FormControl, Validators } from '@angular/forms';
import { setValidatorCustom, setValidatorCustomToContainer } from '@app/appComponents/utils/validatorUtils/validatorUtil';
import { FormInputContainerPropsI } from '@app/appComponents/@types/components/formInputs/formInputs';
import { InputElementEnum } from '@app/appComponents/catalogs/enumCatalog';

describe('setValidatorCustom', () => {
  it('should add custom validator if not present and update validity', () => {
    const control = new FormControl('', []);
    const customValidator = Validators.required;
    const rules: any[] = [];

    setValidatorCustom(control, rules, customValidator);

    expect(control.validator).toBeTruthy();
    expect(control.hasError('required')).toBeTruthy();
  });

  it('should not add duplicate custom validator', () => {
    const control = new FormControl('', []);
    const customValidator = Validators.required;
    const rules = [customValidator];

    setValidatorCustom(control, rules, customValidator);

    // Should still only have one validator (reference is the same)
    expect(rules.length).toBe(1);
  });
});

describe('setValidatorCustomToContainer', () => {
  it('should apply validator to the correct input by id', () => {
    const inputId = 'username';
    const customValidator = Validators.required;

    const container: FormInputContainerPropsI = {
      inputColumns: [
        {
          inputProps: {
                  id: inputId,
                  inputType: InputElementEnum.TEXT,
                  value: '',
                  updateValue: () => {},
          },
          label: 'Username',
          validations: { validatorRules: [] }
        }
      ]
    };

    const control = new FormControl('');

    setValidatorCustomToContainer(container, control, inputId, customValidator);

    expect(control.hasError('required')).toBeTruthy();
  });

  it('should skip applying validator if id does not match', () => {
    const container: FormInputContainerPropsI = {
      inputColumns: [
        {
          inputProps: {
            id: 'not-match',
            inputType: InputElementEnum.TEXT,
            value: '',
            updateValue: () => {},
          },
          label: 'Other field',
          validations: { validatorRules: [] }
        }
      ]
    };

    const control = new FormControl('');
    const validator = Validators.required;

    setValidatorCustomToContainer(container, control, 'username', validator);

    expect(control.hasError('required')).toBeFalsy();
  });

  it('should skip if no validations are defined on the column', () => {
    const container: FormInputContainerPropsI = {
      inputColumns: [
        {
          inputProps: {
            id: 'username',
            inputType: InputElementEnum.TEXT,
            value: '',
            updateValue: () => {},
          },
          label: 'Username'
        }
      ]
    };

    const control = new FormControl('');
    const validator = Validators.required;

    setValidatorCustomToContainer(container, control, 'username', validator);

    expect(control.hasError('required')).toBeFalsy();
  });
});
