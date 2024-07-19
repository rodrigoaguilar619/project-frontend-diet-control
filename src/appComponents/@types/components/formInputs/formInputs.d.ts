import { ValidatorFn } from "@angular/forms";
import { InputElementPropsListI } from "../../../@types/components/inputs/inputElement";

export interface FormInputColumnPropsI {
    inputProps: InputElementPropsListI;
    columnWidth?: string;
    label: string;
    /*id: string;*/
    tooltipText?: string;
    validations?: {
        /*idValidation: string;*/
        validatorRules: ValidatorFn[];
    };
}

export interface FormInputContainerPropsI {
    inputColumns: FormInputColumnPropsI[];
    columnstotal?: number;
    containerWidth?: string;
}

export interface FormInputsComponentI {
    formContainers: FormInputContainerPropsI[];
    formData: Record<string, any>;
    selectorUpdateFormData: (formData: any) => void;
    validatorControl?: any;
}