import { Component, Injector } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputElementCalendarPropsI, InputElementFilePropsI, InputElementMaskPropsI, InputElementSelectPropsI, InputElementTextPropsI } from '@app/appComponents/@types/components/inputs/inputElement';
import { setSubTitle } from '@app/appComponents/controller/actions/layout.actions';
import { InputElementEnum, InputMaskEnum } from '@app/appComponents/catalogs/enumCatalog';
import { buildJsonFromFormControls } from '@app/appComponents/utils/angularUtils/dataFormsParseUtil';
import { GenericParentComponent, FormInputElementComponent } from '@app/appComponents/components/commonComponents.config';

const cities: { description: string; id: string }[] = [
  { description: 'New York', id: 'NY' },
  { description: 'Rome', id: 'RM' },
  { description: 'London', id: 'LDN' },
  { description: 'Istanbul', id: 'IST' },
  { description: 'Paris', id: 'PRS' }
];

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  imports: [CommonModule, ReactiveFormsModule, FormInputElementComponent]
})
export class FormElementsComponent extends GenericParentComponent {

  public valueControlText: FormControl;
  public valueControlSelect: FormControl;
  public valueControlTextArea: FormControl;
  public valueControlCalendar: FormControl;
  public valueControlCalendarFormat: FormControl;
  public valueControlFile: FormControl;
  public valueControlMaskNumber: FormControl;
  public valueControntrolMaskDecimal: FormControl;

  public columnInputTextProps: InputElementTextPropsI = {inputType: InputElementEnum.TEXT, id: "text", value: "1", updateValue: (value: string) => { } };
  public columnInputSelectProps: InputElementSelectPropsI = {inputType: InputElementEnum.SELECT, id: "select", value: "RM", updateValue: (value: string) => { },
    options: cities };
  public columnInputTextAreaProps: InputElementTextPropsI = {inputType: InputElementEnum.TEXTAREA, id: "textarea", value: "3", updateValue: (value: string) => { } };
  public columnInputCalendarProps: InputElementCalendarPropsI = {inputType: InputElementEnum.CALENDAR, id: "calendar", value: 1719032721001, updateValue: (value: string) => { } };
  public columnInputCalendartFormatProps: InputElementCalendarPropsI = {inputType: InputElementEnum.CALENDAR, id: "calendar", value: 1719032721001, dateFormat: "yy/mm/dd", updateValue: (value: string) => { } };
  public columnInputFileProps: InputElementFilePropsI = {inputType: InputElementEnum.FILE, id: "file", value: undefined, updateValue: (value: string) => { } };
  public columnInputMaskDecimalProps: InputElementMaskPropsI = {inputType: InputElementEnum.MASK, id: "maskDecimal", value: "1", updateValue: (value: string) => { },
    maskType: InputMaskEnum.NUMBER, maskProps: {totalDecimals: 2} };
  public columnInputMaskNumberProps: InputElementMaskPropsI = {inputType: InputElementEnum.MASK, id: "maskNumber", value: "1", updateValue: (value: string) => { },
    maskType: InputMaskEnum.NUMBER, maskProps: {} };

  constructor(injector: Injector) {
    super(injector);

    this.store.dispatch(setSubTitle({ subTitle: "Form input elements" }));
    this.valueControlText = new FormControl(this.columnInputTextProps.value);
    this.valueControlSelect = new FormControl(this.columnInputSelectProps.value);
    this.valueControlTextArea = new FormControl(this.columnInputTextAreaProps.value);
    this.valueControlCalendar = new FormControl(this.columnInputCalendarProps.value);
    this.valueControlCalendarFormat = new FormControl(this.columnInputCalendartFormatProps.value);
    this.valueControlFile = new FormControl(this.columnInputFileProps.value);
    this.valueControlMaskNumber = new FormControl(this.columnInputMaskNumberProps.value);
    this.valueControntrolMaskDecimal = new FormControl(this.columnInputMaskDecimalProps.value);

  }

  buildJsonFromFormControls() {
    return buildJsonFromFormControls([
      {key: "text", control: this.valueControlText},
      {key: "select", control: this.valueControlSelect},
      {key: "textarea", control: this.valueControlTextArea},
      {key: "calendar", control: this.valueControlCalendar},
      {key: "calendarFormat", control: this.valueControlCalendarFormat},
      {key: "file", control: this.valueControlFile},
      {key: "maskNumber", control: this.valueControlMaskNumber},
      {key: "maskDecimal", control: this.valueControntrolMaskDecimal}]);
  }

}
