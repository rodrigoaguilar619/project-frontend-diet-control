import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputElementCalendarPropsI, InputElementMaskPropsI, InputElementPropsListI, InputElementSelectPropsI } from '@app/appComponents/@types/components/inputs/inputElement';
import { InputElementEnum, InputMaskEnum } from '@app/appComponents/catalogs/enumCatalog';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';

@Component({
  selector: 'app-form-input-element, [app-input-element]',
  templateUrl: './form-input-element.component.html',
  imports: [
    commonAppModules,
    DatePickerModule,
    InputNumberModule,
  ]
})
export class FormInputElementComponent implements OnInit {

  public inputElementEnum = InputElementEnum;
  public inputMaskEnum =InputMaskEnum;
  public date: Date | null = null;
  @Input() inputProperties!: InputElementPropsListI;
  @Input() valueFormControl!: FormControl;


  constructor() {
  }

  ngOnInit(): void {

    if(this.valueFormControl === undefined) {
      throw new Error('formControl is required');
    }

    if(this.inputProperties === undefined) {
      throw new Error('inputProperties is required');
    }

    if(this.inputProperties.isReadOnly === true)
      this.valueFormControl.disable();

    this.valueFormControl.valueChanges.subscribe(value => {
      this.executeOnChange(value, this.inputProperties?.executeOnChange)
    });

    if(this.inputProperties?.inputType === this.inputElementEnum.CALENDAR) {
      this.date = this.valueFormControl.value !== undefined && this.valueFormControl.value !== null ? new Date(this.valueFormControl.value) : null;
    }
  }

  executeOnChange (valueFormControl: FormControl, executeAfterChange?: Function) {

    if (executeAfterChange !== undefined) {
      executeAfterChange(valueFormControl);
    }
  }

  eventInputCalendarChange(value: any) {
    this.valueFormControl.setValue(value !== undefined && value !== null ? new Date(value).getTime() : null);
    this.valueFormControl.markAsTouched();
  }

  eventInputFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.valueFormControl.setValue(input.files[0]);
    }
    else {
      this.valueFormControl.setValue(null);
    }
  }

  onKeyDown(formControl: FormControl) {
    formControl.markAsTouched();
  }

  getCalendarProps() {
    return (this.inputProperties as InputElementCalendarPropsI);
  }

  getInputMaskProps() {
    return (this.inputProperties as InputElementMaskPropsI);
  }

  getInputSelectProps() {
    return (this.inputProperties as InputElementSelectPropsI);
  }

}

export default FormInputElementComponent;
