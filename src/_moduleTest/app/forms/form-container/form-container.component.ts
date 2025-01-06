import { Component, Injector, Input, SimpleChanges } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputContainerPropsI } from '@app/appComponents/@types/components/formInputs/formInputs';
import { GenericParentComponent } from '@app/appComponents/components/commonComponents.config';
import { setSubTitle } from '@app/appComponents/controller/actions/layout.actions';
import { ValidatorsCustom } from '@app/appComponents/controller/validators/validatorsCustom';
import { InputElementEnum, InputMaskEnum } from '@app/appComponents/catalogs/enumCatalog';
import { buildFormGroupFromContainers } from '@app/appComponents/utils/dataUtils/formDataUtil';
import { setValidatorCustomToContainer } from '@app/appComponents/utils/validatorUtils/validatorUtil';
import { ButtonSubmitComponent, FormInputContainerComponent } from '@app/appComponents/components/commonComponents.config';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  imports: [
    commonAppModules,
    ReactiveFormsModule,
    FormInputContainerComponent,
    FormContainerComponent,
    ButtonSubmitComponent
  ]
})
export class FormContainerComponent extends GenericParentComponent {

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
    validate_number_between: "validate_number_between",
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
        label: "Text Input required", tooltipText: "Text input type required", columnWidth: "16.5%",
        inputProps: {
          id: this.inputIds.text_normal, inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
        },
        validations: {
          validatorRules: [Validators.required]
        },
      },
      {
        label: "Text Input default value", columnWidth: "16.5%",
        inputProps: {
          id: this.inputIds.text_default_value, inputType: InputElementEnum.TEXT, value: 'Text 2 default', updateValue: () => { }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Select normal", columnWidth: "16.5%",
        inputProps: {
          id: this.inputIds.select_normal, inputType: InputElementEnum.SELECT, value: null, updateValue: () => { }, options: this.cities,
          placeholder: "Select city"
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Select answer", columnWidth: "16.5%",
        inputProps: {
          id: this.inputIds.select_answer, inputType: InputElementEnum.SELECT, value: null, updateValue: () => { }, options: this.answers,
          placeholder: "Select answer"
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "calendar 1", columnWidth: "16.5%",
        inputProps: {
          id: this.inputIds.calendar_normal, inputType: InputElementEnum.CALENDAR, value: 2216959200000, updateValue: () => { }
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "calendar format yy/mm/dd", columnWidth: "16.5%",
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
        label: "Email", columnWidth: "16.5%",
        inputProps: {
          id: this.inputIds.validate_email, inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
        },
        validations: {
          validatorRules: [Validators.required, Validators.email]
        }
      },
      {
        label: "Numeric", columnWidth: "16.5%",
        inputProps: {
          id: this.inputIds.validate_number_1, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
        },
        validations: {
          validatorRules: [Validators.required, Validators.min(10)]
        }
      },
      {
        label: "Numeric", columnWidth: "16.5%",
        inputProps: {
          id: this.inputIds.validate_number_2, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
        },
        validations: {
          validatorRules: [Validators.required, Validators.max(100)]
        }
      },
      {
        label: "Numeric", columnWidth: "16.5%",
        inputProps: {
          id: this.inputIds.validate_number_between, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
    ],
    columnstotal: 6,
    containerWidth: "100%"
  }

  @Input() public formId!: number;
  public formGroup: FormGroup;

  constructor(injector: Injector) {
    super(injector);

    this.store.dispatch(setSubTitle({ subTitle: "Form input container" }));
    this.formGroup = buildFormGroupFromContainers([this.inputSectionOne, this.inputSectionTwo]);

  }

  ngOnInit() {

    this.setValidatorCustomRangeBetween();
    this.formGroup.controls[this.inputIds.validate_number_between].valueChanges.subscribe(() => this.setValidatorCustomRangeBetween());
    this.formGroup.controls[this.inputIds.validate_number_1].valueChanges.subscribe(() => this.setValidatorCustomRangeBetween());
    this.formGroup.controls[this.inputIds.validate_number_2].valueChanges.subscribe(() => this.setValidatorCustomRangeBetween());

  }

  setValidatorCustomRangeBetween() {

    setValidatorCustomToContainer(
      this.inputSectionTwo,
      this.formGroup.controls[this.inputIds.validate_number_between],
      this.inputIds.validate_number_between,
      ValidatorsCustom.customValidatorRange(this.formGroup.controls[this.inputIds.validate_number_1], this.formGroup.controls[this.inputIds.validate_number_2]));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.formGroup = buildFormGroupFromContainers([this.inputSectionOne, this.inputSectionTwo]);
  }

  onSubmit() {

    this.formGroup.markAllAsTouched();

    if (!this.formGroup.valid) {
      return;
    }
  }

}
