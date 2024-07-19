import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { FormInputContainerPropsI } from '../../../../appComponents/@types/components/formInputs/formInputs';
import { addFormArrayRow, removeFormArrayRow } from '../../../utils/dataUtils/formDataUtil';

@Component({
  selector: 'app-form-input-dynamic-row, [app-form-input-dynamic-row]',
  templateUrl: './form-input-dynamic-row.component.html'
})
export class FormInputDynamicRowComponent implements OnInit {

  @Input() formArray!: FormArray;
  @Input() inputContainer!: FormInputContainerPropsI;
  @Input() minRows!: number;
  @Input() executeOnAddRowFunction?: Function;
  @Input() executeOnRemoveRowFunction?: Function;

  constructor() {
  }

  ngOnInit(): void {
    if (this.inputContainer === undefined) {
      throw new Error("inputContainer is required");
    }

    if (this.formArray === undefined) {
      throw new Error("formArray is required");
    }
  }

  addRow() {
    let formGroup: FormGroup = addFormArrayRow(this.formArray, this.inputContainer);

    if (this.executeOnAddRowFunction !== undefined)
      this.executeOnAddRowFunction(formGroup);
  }

  removeRow(index: number) {
    removeFormArrayRow(this.formArray, index);

    if (this.executeOnRemoveRowFunction !== undefined)
      this.executeOnRemoveRowFunction(index);
  }

  isSetButtonDelete(_index: number) {
    return this.minRows === undefined || this.formArray.length > this.minRows
  }

  isSetButtonAdd(index: number) {
    return this.formArray.length - 1 === index;
  }

  castFormGoup(formGroup: AbstractControl) {
    return formGroup as FormGroup;
  }
}

export default FormInputDynamicRowComponent;