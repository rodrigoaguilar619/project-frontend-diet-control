import DatatablePrimeBaseComponent from './dataTable/datatable-prime-base/datatable-prime-base.component';
import ButtonsOptionsComponent from './buttons/buttons-options/buttons-options.component';
import ButtonSubmitComponent from './buttons/button-submit/button-submit.component';
import ModalPopupComponent from './modals/modal-popup/modal-popup.component';
import FormInputElementComponent from './forms/form-input-element/form-input-element.component';
import FormInputContainerComponent from './forms/form-input-container/form-input-container.component';
import FormInputValidatorComponent from './forms/form-input-validator/form-input-validator.component';
import FormInputColumnComponent from './forms/form-input-column/form-input-column.component';
import FormInputContainersComponent from './forms/form-input-containers/form-input-containers.component';
import FormInputDynamicRowComponent from './forms/form-input-dynamic-row/form-input-dynamic-row.component';
import { GenericParentComponent } from './_generic/generic-parent/generic-parent.component';

export const commonAppComponents: any[] = [
    GenericParentComponent,
    DatatablePrimeBaseComponent,
    ButtonsOptionsComponent,
    ButtonSubmitComponent,
    ModalPopupComponent,
    FormInputElementComponent,
    FormInputColumnComponent,
    FormInputContainerComponent,
    FormInputContainersComponent,
    FormInputValidatorComponent,
    FormInputDynamicRowComponent
];

export * from './dataTable/datatable-prime-base/datatable-prime-base.component';
export * from './buttons/buttons-options/buttons-options.component';
export * from './buttons/button-submit/button-submit.component';
export * from './modals/modal-popup/modal-popup.component';
export * from './forms/form-input-element/form-input-element.component';
export * from './forms/form-input-container/form-input-container.component';
export * from './forms/form-input-validator/form-input-validator.component';
export * from './forms/form-input-column/form-input-column.component';
export * from './forms/form-input-containers/form-input-containers.component';
export * from './forms/form-input-dynamic-row/form-input-dynamic-row.component';
export * from './_generic/generic-parent/generic-parent.component';

