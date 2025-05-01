import { FormControl } from '@angular/forms';
import { InputElementEnum } from '@app/appComponents/catalogs/enumCatalog';
import { FormInputColumnComponent } from '@app/appComponents/components/forms/form-input-column/form-input-column.component';

describe('FormInputColumnComponent', () => {
  let component: FormInputColumnComponent;

  beforeEach(() => {
    component = new FormInputColumnComponent();
  });

  test('should throw error if valueFormControl is missing', () => {
    expect(() => component.ngOnInit()).toThrow('[FormInputColumnComponent] valueFormControl input is required');
  });

  test('should throw error if inputColumnProps is missing', () => {
    component.valueFormControl = new FormControl('');
    expect(() => component.ngOnInit()).toThrow('[FormInputColumnComponent] inputColumnProps input is required');
  });

  test('should not throw error if both inputs are provided', () => {
    component.valueFormControl = new FormControl('');
    component.inputColumnProps = {
      label: 'Test Label',
      inputProps: {
        id: 'input1',
        inputType: InputElementEnum.TEXT,
        value: '',
        updateValue: () => {},
      }
    };
    expect(() => component.ngOnInit()).not.toThrow();
  });

  test('should throw error if valueFormControl is undefined', () => {
    component.inputColumnProps = {
      label: 'Test Label',
      inputProps: {
        id: 'input1',
        inputType: InputElementEnum.TEXT,
        value: '',
        updateValue: () => {},
      }
    };
    expect(() => component.ngOnInit()).toThrow('[FormInputColumnComponent] valueFormControl input is required');
  });

  test('should throw error if inputColumnProps is undefined', () => {
    component.valueFormControl = new FormControl('');
    expect(() => component.ngOnInit()).toThrow('[FormInputColumnComponent] inputColumnProps input is required');
  });
});
