import { FormGroup, FormControl } from '@angular/forms';
import { FormInputContainerComponent } from '@app/appComponents/components/forms/form-input-container/form-input-container.component';

describe('FormInputContainerComponent', () => {
  let component: FormInputContainerComponent;

  beforeEach(() => {
    component = new FormInputContainerComponent();
  });

  test('should throw error if formGroup is missing', () => {
    expect(() => component.ngOnInit()).toThrow('[FormInputContainerComponent] formGroup input is required');
  });

  test('should throw error if inputContainer is missing', () => {
    component.formGroup = new FormGroup({});
    expect(() => component.ngOnInit()).toThrow('[FormInputContainerComponent] inputContainer input is required');
  });

  test('should correctly cast AbstractControl to FormControl', () => {
    const formControl = new FormControl('test');
    expect(component.castFormControl(formControl)).toBeInstanceOf(FormControl);
  });

  test('should throw error if formControl is missing', () => {
    const formControl = undefined;
    expect(() => component.castFormControl(formControl)).toThrow('[FormInputContainerComponent] Missing FormControl when casting');
  });
});
