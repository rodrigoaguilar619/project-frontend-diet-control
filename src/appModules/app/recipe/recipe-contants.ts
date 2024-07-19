import { Validators } from "@angular/forms";
import { DataTablePropsI } from "@app/appComponents/@types/components/dataTable/dataTable";
import { FormInputContainerPropsI } from "@app/appComponents/@types/components/formInputs/formInputs";
import { InputElementEnum } from "@app/appComponents/catalogs/enumCatalog";

export const RECIPE_REGISTER_DATA_IDS = {
    TITLE: "title",
    INSTRUCTIONS: "instructions"
}

export const RECIPE_REGISTER_DATA: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Title:", columnWidth: "30%",
            inputProps: {
                id: RECIPE_REGISTER_DATA_IDS.TITLE, inputType: InputElementEnum.TEXT, value: null, updateValue: () => { },
                placeholder: "Title"
            },
            validations: {
                validatorRules: [Validators.required]
            }
        },
        {
            label: "Instructions:", columnWidth: "70%",
            inputProps: {
                id: RECIPE_REGISTER_DATA_IDS.INSTRUCTIONS, inputType: InputElementEnum.TEXTAREA, value: null, updateValue: () => { },
                placeholder: "Instructions"
            },
            validations: {
                validatorRules: [Validators.required]
            }
        }
    ]
}

export const ADMIN_RECIPE_COLUMN_IDS = {
    ID: "id",
    TITLE: "title"
}

export const ADMIN_RECIPE_COLUMN: DataTablePropsI[] = [
    {
        field: ADMIN_RECIPE_COLUMN_IDS.ID, header: 'Id', tableConfig: {
            styleColumnHeaderCss: { minWidth: "50px", textAlign: "center" }
        }
    },
    {
        field: ADMIN_RECIPE_COLUMN_IDS.TITLE, header: 'Title', tableConfig: {
            styleColumnHeaderCss: { minWidth: "400px", textAlign: "center" }
        }
    },
]