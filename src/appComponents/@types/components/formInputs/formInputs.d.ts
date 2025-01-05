import { ValidatorFn } from "@angular/forms";
import { InputElementPropsListI } from "@app/appComponents/@types/components/inputs/inputElement";

export interface FormInputColumnPropsI {
    inputProps: InputElementPropsListI;
    columnWidth?: string;
    label: string;
    tooltipText?: string;
    validations?: {
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
