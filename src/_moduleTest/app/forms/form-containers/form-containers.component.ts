import { Component, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormInputContainerPropsI } from '../../../../appComponents/@types/components/formInputs/formInputs';
import { GenericParentComponent } from '../../../../appComponents/_generic/generic-parent/generic-parent.component';
import { setTitle } from '../../../../appComponents/controller/actions/layout.actions';
import { InputElementEnum, InputMaskEnum } from '../../../../appComponents/catalogs/enumCatalog';
import { buildFormGroupFromContainers } from '../../../../appComponents/utils/dataUtils/formDataUtil';

@Component({
  selector: 'app-form-containers',
  templateUrl: './form-containers.component.html'
})
export class FormContainersComponent extends GenericParentComponent {

  public inputIds = {
    text_normal: "text_normal",
    text_default_value: "text_default_value",
    select_normal: "select_normal",
    select_answer: "select_answer",
    calendar_normal: "calendar_normal",
    calendar_format: "calendar_format",
    validate_email: "validate_email",
    validate_numeric: "validate_numeric",
    validate_number_1: "validate_number_1",
    validate_number_2: "validate_number_2",
    file: "file"
  }
  
  public cities: any[] = [
    { description: 'New York', id: 'NY' },
    { description: 'Rome', id: 'RM' },
    { description: 'London', id: 'LDN' },
    { description: 'Istanbul', id: 'IST' },
    { description: 'Paris', id: 'PRS' }
  ];
  
  public answers: any[] = [
    { description: 'Yes', id: true },
    { description: 'No', id: false }
  ];
  
  public inputSectionOne: FormInputContainerPropsI = {
    inputColumns: [
        {
          label: "Text Input required", tooltipText: "Text input type required", columnWidth: "15%",
          inputProps: {
            id: this.inputIds.text_normal, inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
          },
          validations: {
            validatorRules: [Validators.required]
          },
        },
        {
            label: "Text Input default value", columnWidth: "15%",
            inputProps: {
              id: this.inputIds.text_default_value, inputType: InputElementEnum.TEXT, value: 'Text 2 default', updateValue: () => { }, isReadOnly: true
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
        {
            label: "Select normal", columnWidth: "15%",
            inputProps: {
              id: this.inputIds.select_normal, inputType: InputElementEnum.SELECT, value: null, updateValue: () => { }, options: this.cities,
                placeholder: "Select city"
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
        {
            label: "Select answer", columnWidth: "15%",
            inputProps: {
              id: this.inputIds.select_answer, inputType: InputElementEnum.SELECT, value: null, updateValue: () => { }, options: this.answers,
                placeholder: "Select answer"
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
        {
            label: "calendar 1", columnWidth: "15%",
            inputProps: {
              id: this.inputIds.calendar_normal, inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
        {
            label: "calendar format yy/mm/dd", columnWidth: "15%",
            inputProps: {
              id: this.inputIds.calendar_format, inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }, dateFormat: "yy/mm/dd"
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
    ],
    columnstotal: 6,
    containerWidth: "100%"
  }
  
  public inputSectionTwo: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Validate email", columnWidth: "50%",
            inputProps: {
              id: this.inputIds.validate_email, inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
            },
            validations: {
                validatorRules: [Validators.required, Validators.email]
            }
        },
        {
            label: "Validate numeric with 2 decimals", columnWidth: "50%",
            inputProps: {
              id: this.inputIds.validate_numeric, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
                maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
            },
            validations: {
                validatorRules: [Validators.required]
            }
        }
    ],
    columnstotal: 2,
    containerWidth: "80%"
  }
  
  public inputSectionThree: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Validate number 1", columnWidth: "50%",
            tooltipText: "This field must be greater than " + this.inputIds.validate_number_1 + "."
                + "<br/>la rule is added into the component because needs parameter value which be compare to dinamically",
            inputProps: {
              id: this.inputIds.validate_number_1, inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
        {
            label: "Validate number 2", columnWidth: "50%",
            inputProps: {
              id: this.inputIds.validate_number_2, inputType: InputElementEnum.TEXT, value: '', updateValue: () => { },
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
    ],
    columnstotal: 2,
    containerWidth: "80%"
  }
  
  public inputSectionFour: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "load file",
            tooltipText: "load file", columnWidth: "100%",
            inputProps: {
              id: this.inputIds.file, inputType: InputElementEnum.FILE, value: null, updateValue: () => { }
            },
            validations: {
                validatorRules: [Validators.required]
            }
        }
    ],
    columnstotal: 1,
    containerWidth: "100%"
  }
  
  public formContainers: FormInputContainerPropsI[] = [this.inputSectionOne, this.inputSectionTwo, this.inputSectionThree];
  public formContainers2: FormInputContainerPropsI[] = [this.inputSectionFour];

  public formGroup: FormGroup;
  public formGroup2: FormGroup;

  constructor(injector: Injector) {
    super(injector);

    this.store.dispatch(setTitle({ title: "Form input containers" }));
    this.formGroup = buildFormGroupFromContainers(this.formContainers);
    this.formGroup2 = buildFormGroupFromContainers(this.formContainers2);

  }

  onSubmit() {

    this.formGroup.markAllAsTouched();
    this.formGroup2.markAllAsTouched();

    if (!this.formGroup.valid || !this.formGroup2.valid) {
      return;
    }
  }

}
