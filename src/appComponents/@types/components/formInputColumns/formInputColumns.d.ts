import { FormInputColumnPropsI } from "@app/appComponents/@types/components/formInputs/formInputs";

export interface FormInputColumnsPropsI {
    inputColumns: FormInputColumnPropsI[];
    width: string;
    formData: Record<string, any>;
    validatorControl?: any;
    selectorUpdateFormData: (formData: Record<string, any>) => void;
    executeOnChange?: (formData: Record<string, any>) => void;
}
