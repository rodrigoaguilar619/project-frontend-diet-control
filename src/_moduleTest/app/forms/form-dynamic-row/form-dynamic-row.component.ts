import { Component, Injector } from '@angular/core';
import { FormArray, Validators } from '@angular/forms';
import { FormInputContainerPropsI } from '@app/appComponents/@types/components/formInputs/formInputs';
import { setSubTitle } from '@app/appComponents/controller/actions/layout.actions';
import { InputElementEnum } from '@app/appComponents/catalogs/enumCatalog';
import { buildFormArrayFromContainer } from '@app/appComponents/utils/dataUtils/formDataUtil';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import { GenericParentComponent, ButtonSubmitComponent, FormInputContainerComponent, FormInputDynamicRowComponent } from '@app/appComponents/components/commonComponents.config';

@Component({
  selector: 'app-form-dynamic-row',
  templateUrl: './form-dynamic-row.component.html',
  imports: [
    commonAppModules,
    FormInputDynamicRowComponent,
    ButtonSubmitComponent,
    FormInputContainerComponent
  ]
})
export class FormDynamicRowComponent extends GenericParentComponent {

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

  public inputContainer: FormInputContainerPropsI = {
    inputColumns: [
        {
          label: "Text Input required", tooltipText: "Text input type required", columnWidth: "25%",
          inputProps: {
            id: this.inputIds.text_normal, inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
          },
          validations: {
            validatorRules: [Validators.required]
          },
        },
        {
            label: "Text Input default value", columnWidth: "25%",
            inputProps: {
              id: this.inputIds.text_default_value, inputType: InputElementEnum.TEXT, value: 'Text 2 default', updateValue: () => { }, isReadOnly: true
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
        {
            label: "Select normal", columnWidth: "25%",
            inputProps: {
              id: this.inputIds.select_normal, inputType: InputElementEnum.SELECT, value: null, updateValue: () => { }, options: this.cities,
                placeholder: "Select city"
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
        {
            label: "Select answer", columnWidth: "25%",
            inputProps: {
              id: this.inputIds.select_answer, inputType: InputElementEnum.SELECT, value: null, updateValue: () => { }, options: this.answers,
                placeholder: "Select answer"
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
        {
            label: "calendar 1", columnWidth: "25%",
            inputProps: {
              id: this.inputIds.calendar_normal, inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
        {
            label: "calendar format yy/mm/dd", columnWidth: "25%",
            inputProps: {
              id: this.inputIds.calendar_format, inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }, dateFormat: "yy/mm/dd"
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
    ],
    columnstotal: 4,
    containerWidth: "100%"
  }

  public formArray: FormArray;

  constructor(injector: Injector) {
    super(injector);

    this.store.dispatch(setSubTitle({ subTitle: "Form dynamic row" }));
    this.formArray = buildFormArrayFromContainer(this.inputContainer);
  }

  onSubmit() {

    let debugClass = generateDebugClassModule("init datatable list module");
    debug(debugClass, "start");

    this.formArray.markAllAsTouched();

    if (!this.formArray.valid) {
      return;
    }
  }

  setUntouched() {
    this.formArray.markAsUntouched();
  }

}
