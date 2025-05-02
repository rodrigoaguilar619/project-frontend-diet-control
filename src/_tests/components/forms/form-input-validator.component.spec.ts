import { FormControl, Validators } from '@angular/forms';
import { FormInputValidatorComponent } from '@app/appComponents/components/forms/form-input-validator/form-input-validator.component';

describe('FormInputValidatorComponent', () => {
  let component: FormInputValidatorComponent;

  beforeEach(() => {
    component = new FormInputValidatorComponent();
  });

  describe('ngOnInit', () => {
    it('should throw error if valueFormControl is undefined', () => {
      expect(() => component.ngOnInit()).toThrow('formControl is requireds');
    });

    it('should not throw error if valueFormControl is defined', () => {
      component.valueFormControl = new FormControl('');
      expect(() => component.ngOnInit()).not.toThrow();
    });
  });

  describe('getErrorMessage', () => {
    it('should return undefined if no errors', () => {
      const control = new FormControl('test');
      expect(component.getErrorMessage(control)).toBeUndefined();
    });

    it('should return "Field required" if required error', () => {
      const control = new FormControl('', Validators.required);
      control.markAsTouched();
      control.updateValueAndValidity();
      expect(component.getErrorMessage(control)).toBe('Field required');
    });

    it('should return min error message', () => {
      const control = new FormControl(1, [Validators.min(5)]);
      control.markAsTouched();
      control.updateValueAndValidity();
      expect(component.getErrorMessage(control)).toBe('Min length is 5');
    });

    it('should return max error message', () => {
      const control = new FormControl(100, [Validators.max(10)]);
      control.markAsTouched();
      control.updateValueAndValidity();
      expect(component.getErrorMessage(control)).toBe('Max length is 10');
    });

    it('should return "Invalid email" for email error', () => {
      const control = new FormControl('invalidemail', Validators.email);
      control.markAsTouched();
      control.updateValueAndValidity();
      expect(component.getErrorMessage(control)).toBe('Invalid email');
    });

    it('should return forbiddenName error message', () => {
      const control = new FormControl('');
      (control as any).errors = { forbiddenName: { value: 'admin' } };
      expect(component.getErrorMessage(control)).toBe('Name cannot be admin');
    });

    it('should return pattern error message', () => {
      const control = new FormControl('');
      (control as any).errors = { pattern: { requiredPattern: '[a-z]+' } };
      expect(component.getErrorMessage(control)).toBe('Invalid format. Must match: [a-z]+');
    });

    it('should return default error if unknown error type', () => {
      const control = new FormControl('');
      (control as any).errors = { customError: 'Custom error message' };
      expect(component.getErrorMessage(control)).toBe('Custom error message');
    });
  });
});
