import { FormArray, FormGroup } from "@angular/forms";
import { FormControlData } from "../../@types/utils/dataFormsUtil";

export function buildJsonFromFormControls(data: FormControlData[]) {

    const result: { [key: string]: any } = {};

    data.forEach(item => {
        result[item.key] = item.control.value;
      });

    return JSON.stringify(result);
}

export function buildJsonFromFormGroup(formGroup: FormGroup) {

    const result: { [key: string]: any } = {};

    Object.keys(formGroup.controls).forEach(key => {

        result[key] = formGroup.controls[key].value;
      });

    return JSON.stringify(result);
}

export function buildJsonFromFormArray(formArray: FormArray): string {

  const result: any[] = [];
  
  formArray.controls.forEach(control => {

    if (control instanceof FormGroup) {
      const groupData: { [key: string]: any } = {};
      Object.keys(control.controls).forEach(key => {
        groupData[key] = control.controls[key].value;
      });
      result.push(groupData);
    } else {
      result.push(control.value);
    }
  });

  return JSON.stringify(result);
}