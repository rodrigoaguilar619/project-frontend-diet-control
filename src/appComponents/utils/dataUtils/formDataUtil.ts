import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { FormInputColumnPropsI, FormInputContainerPropsI } from "../../@types/components/formInputs/formInputs";
import { ElementRef } from "@angular/core";

const formBuilder = new FormBuilder();

export function scrollToFirstInvalidControl(form: FormGroup | FormArray, el: ElementRef) {
    if (form?.invalid) {
        const invalidControl = el.nativeElement.querySelector('.ng-invalid');
        if (invalidControl) {
            invalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            invalidControl.focus();
        }
    }
}

export function validateForm(form: FormGroup | FormArray, el: ElementRef) {
    form.markAllAsTouched();
    if(!form.valid) {
        scrollToFirstInvalidControl(form, el);
        return false;
    }
    return true;
}

export function buildFormGroup(formInputColumns: FormInputColumnPropsI[], formGroup?: FormGroup) {

    if (formGroup === undefined)
        formGroup = formBuilder.group({});

    formInputColumns.forEach((formInputColumn: FormInputColumnPropsI) => {
        let formControl = formBuilder.control(formInputColumn.inputProps.value, formInputColumn.validations?.validatorRules);

        if (formInputColumn.validations !== undefined)
            formControl.addValidators(formInputColumn.validations.validatorRules);

        formGroup.addControl(formInputColumn.inputProps.id, formControl);
    });

    formGroup.markAsUntouched();

    return formGroup;
}

export function buildFormGroupFromContainers(formContainers: FormInputContainerPropsI[], formGroup?: FormGroup) {

    if (formGroup === undefined)
        formGroup = formBuilder.group({});

    formContainers.forEach((formContainer: FormInputContainerPropsI) => {
        buildFormGroup(formContainer.inputColumns, formGroup);
    });

    return formGroup;
}

export function buildFormArrayFromContainer(formContainer: FormInputContainerPropsI, formArray?: FormArray) {

    if (formArray === undefined)
        formArray = formBuilder.array([]);

    let formGroup = buildFormGroup(formContainer.inputColumns);

    formArray.insert(formArray.length, formGroup);

    return formArray;
}

export function addFormArrayRow(formArray: FormArray, formContainer: FormInputContainerPropsI) {

    let formGroup = buildFormGroup(formContainer.inputColumns);
    formGroup.reset();
    formArray.insert(formArray.length, formGroup);

    return formGroup;
}

export function removeFormArrayRow(formArray: FormArray, index: number) {
    formArray.removeAt(index);
}
