import { InputElementEnum, InputMaskEnum } from "../../../catalogs/enumCatalog";

type InputElementPropsListI = InputElementTextPropsI | InputElementSelectPropsI | InputElementCalendarPropsI 
    | InputElementFilePropsI | InputElementMaskPropsI;

export interface InputDropDownValueI {
    id: string;
    description: string;
}

export interface InputElementPropsI<T> {
    id: string;
    inputType: InputElementEnum;
    value: T;
    isShowError?: boolean;
    updateValue: (value: any) => void;
    isReadOnly?: boolean;
    executeOnChange?: (formData: Record<string, any>) => void;
}

export interface InputElementMaskPropsI extends InputElementPropsI<string> {
    maskType: InputMaskEnum;
    maskProps: InputMaskPropsI;
}

export interface InputElementTextPropsI extends InputElementPropsI<string> {
}

export interface InputElementSelectPropsI extends InputElementPropsI<string> {
    options: InputDropDownValueI[],
    placeholder?: string,
    isOptionAll?: boolean 
}

export interface InputElementCalendarPropsI extends InputElementPropsI<number | undefined | null> {
    dateFormat?: string;
}

export interface InputElementFilePropsI extends InputElementPropsI<File | null | undefined> {
}

export interface InputMaskPropsI {
    totalDecimals?: number;
}

export interface InputElementComponentI {
    inputProps: InputElementPropsListI;
}