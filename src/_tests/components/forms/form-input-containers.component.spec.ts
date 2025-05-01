import { FormGroup } from '@angular/forms';
import { FormInputContainersComponent } from '@app/appComponents/components/forms/form-input-containers/form-input-containers.component';

describe('FormInputContainersComponent', () => {
  let component: FormInputContainersComponent;

  beforeEach(() => {
    component = new FormInputContainersComponent();
  });

  test('should throw error if formGroup is missing', () => {
    expect(() => component.ngOnInit()).toThrow('[FormInputContainersComponent] formGroup input is required');
  });

  test('should throw error if inputContainers is missing', () => {
    component.formGroup = new FormGroup({});
    expect(() => component.ngOnInit()).toThrow('[FormInputContainersComponent] inputContainers input is required');
  });
});
