import { FormInputColumnPropsI } from "@app/appComponents/@types/components/formInputs/formInputs";

export interface FormInputsMultipleComponentI {
    inputColumns: FormInputColumnPropsI[];
    formDataList: Record<string, any>[];
    selectorUpdateFormDataList: (formData: any) => void;
    validatorControl?: any;
}
