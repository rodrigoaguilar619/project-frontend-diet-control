import { Component, Injector, OnInit } from '@angular/core';
import axios from 'axios';
import { TableModule } from 'primeng/table';
import { IButtonOptions } from '@app/appComponents/@types/components/buttons/buttons';
import { DataTablePropsI } from '@app/appComponents/@types/components/dataTable/dataTable';
import { DataTableService } from '@app/_moduleTest/controller/services/dataTableService';
import { MaskDataTypeEnum, ModalTypeEnum } from '@app/appComponents/catalogs/enumCatalog';
import ModalClass from "@app/appComponents/classes/modalClass";
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import { setSubTitle } from '@app/appComponents/controller/actions/layout.actions';
import { _APP_TITLE_ } from '@app/appComponents/catalogs/constantCatalog';
import { GenericParentComponent, DatatablePrimeBaseComponent, ModalPopupComponent } from '@app/appComponents/components/commonComponents.config';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import { FormContainerComponent } from '@app/_moduleTest/app/forms/form-container/form-container.component';

export const columnsList: DataTablePropsI[] = [
    {
        field: 'answer', header: 'Answer', tableConfig: {
            styleColumnHeaderCss: { "width": "9.5%", "text-align": "center" },
            isSortable: true
        },
        maskProps: {
            maskType: MaskDataTypeEnum.ANSWER,
            isShowNull: true
        }

    },
    {
        field: 'currency', header: 'Currency', tableConfig: {
            styleColumnHeaderCss: { "width": "8.5%", "text-align": "right" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY
        }
    },
    {
        field: 'currencyZeroPad', header: 'Currency zeropad 5', tableConfig: {
            styleColumnHeaderCss: { width: "10.5%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 5,
                addZeroPad: true
            }
        }
    },
    {
        field: 'currencySymbol', header: 'Currency Simbol', tableConfig: {
            styleColumnHeaderCss: { width: "9.5%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'percentageSymbol', header: 'Percentage Simbol', tableConfig: {
            styleColumnHeaderCss: { width: "9.5%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSymbolPercent: true
            }
        }
    },
    {
        field: 'currencyComma', header: 'Currency Commma', tableConfig: {
            styleColumnHeaderCss: { width: "9.5%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true
            }
        }
    },
    {
        field: 'currencyInteger', header: 'Currency Integer', tableConfig: {
            styleColumnHeaderCss: { width: "9.5%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                decimalPlaces: 0
            }
        }
    },
    {
        field: 'currencyAllOptions', header: 'Currency All Options', tableConfig: {
            styleColumnHeaderCss: { width: "9.5%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 5,
                addZeroPad: true,
                addSymbolCurrency: true,
                addSeparateComma: true
            }
        }
    },
    {
        field: 'dateMillis', header: 'Date', tableConfig: {
            styleColumnHeaderCss: { width: "9.5%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: "DD/MM/yyyy"
            }
        }
    },
];

export enum ModuleEnum {
    ROW_TEXT = 'ROW_TEXT',
    CONFIRMATION_TEXT = 'CONFIRMATION_TEXT',
    CONTAINER_MODULE = 'CONTAINER_MODULE'
}

@Component({
    selector: 'app-datatable-data',
    templateUrl: './datatable-data.component.html',
    imports: [
      commonAppModules,
      TableModule,
      DatatablePrimeBaseComponent,
      ModalPopupComponent,
      FormContainerComponent
    ]
})
export class DataTableDataComponent extends GenericParentComponent implements OnInit {


    constructor(injector: Injector, private dataTableService: DataTableService) {
        super(injector);

        this.store.dispatch(setSubTitle({ subTitle: "Datatable Data " }));
    }

    public modalClass: ModalClass = new ModalClass(false, ModalTypeEnum.POPUP);
    public moduleEnum = ModuleEnum;
    public formIdSelected!: number;

    ngOnInit(): void {
        this.initModule();
    }

    public columns: DataTablePropsI[] = columnsList;
    public values: any[] = [];

    public buttonsOptions: IButtonOptions[] = [
        {
            label: "",
            function: this.openModal.bind(this),
            icon: "far fa-edit",
            title: "Show row data"
        },
        {
            label: "",
            function: this.openModalModule.bind(this),
            icon: "fa-solid fa-toolbox",
            title: "Show container module"
        },
        {
            label: "",
            function: this.openModalConfirmation.bind(this),
            icon: "fa-regular fa-square-check",
            title: "Show confirmation modal"
        }];

    openModal(rowData: any) {
        this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
        this.modalClass.setDataModal(this.moduleEnum.ROW_TEXT, "SHOW MODAL", this.closeModal.bind(this));
        this.modalClass.setContentText(JSON.stringify(rowData));
    }

    openModalModule(rowData: any) {
        this.formIdSelected = rowData.id;
        this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
        this.modalClass.setDataModal(this.moduleEnum.CONTAINER_MODULE, "SHOW MODULE", this.closeModal.bind(this));
    }

    openModalConfirmation(rowData: any) {
        this.modalClass.setConfig(true, ModalTypeEnum.CONFIRMATION, "md")
        this.modalClass.setDataModal(this.moduleEnum.CONFIRMATION_TEXT, "SHOW MODAL CONFIRMATION", this.cancelConfirmation.bind(this));
        this.modalClass.setExecuteFunction(this.confirmConfirmation.bind(this));
    }

    confirmConfirmation() {
        this.closeModal();
        this.toastPrimeInstance.showSuccess("SUCCESS TEST", "SUCCESS DESCRIPTION");
    }

    cancelConfirmation() {
        this.closeModal();
        this.toastPrimeInstance.showError("ERROR TEST", "ERROR DESCRIPTION", new Error("ERROR CLASS TEST"));
    }

    closeModal() {
        this.modalClass.setIsShowPopUp(false);
    }


    initModule() {

        let debugClass = generateDebugClassModule("init datatable list module");
        debug(debugClass, "start");

        this.spinner.show();
        axios.all([this.dataTableService.getDataTableDataService(1, {})])
            .then(axios.spread((dataTableData) => {

                debug(debugClass, "result", dataTableData);
                this.values = dataTableData.data;
                this.spinner.hide();

            }))
            .catch((error) => {
                this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
            });
    }
}
