import { ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputColumnPropsI, FormInputContainerPropsI } from '@app/appComponents/@types/components/formInputs/formInputs';
import { InputElementEnum } from '@app/appComponents/catalogs/enumCatalog';
import {
  addFormArrayRow,
  buildFormArrayFromContainer,
  buildFormGroup,
  buildFormGroupFromContainers,
  removeFormArrayRow,
  scrollToFirstInvalidControl,
  validateForm,
} from '@app/appComponents/utils/dataUtils/formDataUtil';

const formBuilder = new FormBuilder();

describe('dataFormsUtil', () => {

  describe('scrollToFirstInvalidControl', () => {
    it('should scroll and focus the first invalid control', () => {
      const scrollIntoViewMock = jest.fn();
      const focusMock = jest.fn();

      const invalidElement = {
        scrollIntoView: scrollIntoViewMock,
        focus: focusMock,
      };

      const nativeElement = {
        querySelector: jest.fn().mockReturnValue(invalidElement),
      };

      const elementRef = { nativeElement } as unknown as ElementRef;
      const form = formBuilder.group({
        name: new FormControl('', Validators.required)
      });

      form.markAllAsTouched();

      scrollToFirstInvalidControl(form, elementRef);

      expect(nativeElement.querySelector).toHaveBeenCalledWith('.ng-invalid');
      expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' });
      expect(focusMock).toHaveBeenCalled();
    });
  });

  describe('validateForm', () => {
    it('should validate and return true for valid form', () => {
      const form = formBuilder.group({
        email: new FormControl('valid@example.com', Validators.required)
      });
      const elementRef = { nativeElement: {} } as ElementRef;
      expect(validateForm(form, elementRef)).toBe(true);
    });

    it('should validate and return false for invalid form', () => {
      const form = formBuilder.group({
        email: new FormControl('', Validators.required)
      });
      const nativeElement = {
        querySelector: jest.fn().mockReturnValue({
          scrollIntoView: jest.fn(),
          focus: jest.fn(),
        }),
      };
      const elementRef = { nativeElement } as unknown as ElementRef;

      expect(validateForm(form, elementRef)).toBe(false);
    });
  });

  describe('buildFormGroup', () => {
    it('should build a FormGroup from FormInputColumnPropsI[]', () => {
      const formInputColumns: FormInputColumnPropsI[] = [
        {
          label: "Text Input required", tooltipText: "Text input type required", columnWidth: "16.5%",
          inputProps: {
            id: 'field1', inputType: InputElementEnum.TEXT, value: 'initial', updateValue: () => { }
          },
          validations: {
            validatorRules: [Validators.required]
          },
        },
      ];
      const formGroup = buildFormGroup(formInputColumns);
      expect(formGroup.contains('field1')).toBe(true);
      expect(formGroup.get('field1')?.value).toBe('initial');
    });
  });

  describe('buildFormGroupFromContainers', () => {
    it('should build a FormGroup from FormInputContainerPropsI[]', () => {
      const formContainers: FormInputContainerPropsI[] = [
        {
          inputColumns: [
            {
              label: "User Name Input required", tooltipText: "User name input type required", columnWidth: "16.5%",
              inputProps: {
                id: 'username', inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
              },
              validations: {
                validatorRules: [Validators.required]
              },
            },
          ]
        },
      ];

      const formGroup = buildFormGroupFromContainers(formContainers);

      expect(formGroup.contains('username')).toBe(true);
    });
  });

  describe('buildFormArrayFromContainer', () => {
    it('should build a FormArray from a single FormInputContainerPropsI', () => {
      const formContainer: FormInputContainerPropsI = {
        inputColumns: [
          {
            label: "Item Name Input required", tooltipText: "Item name input type required", columnWidth: "16.5%",
            inputProps: {
              id: 'itemName', inputType: InputElementEnum.TEXT, value: 'Item A', updateValue: () => { }
            },
            validations: {
              validatorRules: [Validators.required]
            },
          },
        ]
      };

      const formArray = buildFormArrayFromContainer(formContainer);

      expect(formArray.length).toBe(1);
      expect((formArray.at(0) as FormGroup).get('itemName')?.value).toBe('Item A');
    });
  });

  describe('addFormArrayRow', () => {
    it('should add a new FormGroup to FormArray', () => {
      const formContainer: FormInputContainerPropsI = {
        inputColumns: [
          {
            label: "Description Input required", tooltipText: "Description input type required", columnWidth: "16.5%",
            inputProps: {
              id: 'description', inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
            },
            validations: {
              validatorRules: [Validators.required]
            },
          },
        ]
      };

      const formArray = formBuilder.array([]);
      addFormArrayRow(formArray, formContainer);

      expect(formArray.length).toBe(1);
      expect(formArray.at(0)).toBeInstanceOf(FormGroup);
    });
  });

  describe('removeFormArrayRow', () => {
    it('should remove the form group at specified index', () => {
      const formArray = formBuilder.array([
        formBuilder.group({ field1: ['value1'] }),
        formBuilder.group({ field2: ['value2'] })
      ]);

      removeFormArrayRow(formArray, 0);

      expect(formArray.length).toBe(1);
      expect(formArray.at(0).get('field2')?.value).toBe('value2');
    });
  });

});
