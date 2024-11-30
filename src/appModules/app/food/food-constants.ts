import { Validators } from "@angular/forms";
import { DataTablePropsI } from "@app/appComponents/@types/components/dataTable/dataTable";
import { FormInputContainerPropsI } from "@app/appComponents/@types/components/formInputs/formInputs";
import { InputElementEnum, InputMaskEnum, MaskDataTypeEnum } from "@app/appComponents/catalogs/enumCatalog";

    export const FOOD_ELEMENT_COLUMNS_IDS = {
      QUANTITY: "quantityGrams",
      UNIT: "unityGrams",
      CALORIES: "calories",
      PROTEIN: "proteins",
      CARBOHYDRATES: "carbohydrates",
      FAT: "fat",
      FAT_MONO: "fatMono",
      FAT_POLI: "fatPoli",
      FAT_SAT: "fatSat",
      FAT_TRANS: "fatTrans",
      CARB_SUGAR: "carbSugar",
      CARB_SUGAR_ADDED: "carbSugarAdded",
      FIBER: "fiber",
      CHOLESTEROL: "cholesterol",
      SODIUM: "sodium",
      COST_KILO: "costKilo",
      COST_GRAM: "costGram",
      COST_CALORIE: "costCalorie",
      COST_PROTEIN: "costProtein",
    }

    export const FOOD_LIST_COLUMNS_IDS = {
      DESCRIPTION: "description",
      PRICE: "price",
      ...FOOD_ELEMENT_COLUMNS_IDS
    }

    export const FOOD_LIST_COLUMNS: DataTablePropsI[] = [
        { field: FOOD_LIST_COLUMNS_IDS.DESCRIPTION, header: 'Description', tableConfig: {
          styleColumnHeaderCss: { minWidth: "300px", textAlign: "center" }, isColumnFreeze: true }
        },
        { field: FOOD_LIST_COLUMNS_IDS.PRICE, header: 'Price', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.QUANTITY, header: 'Grams', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.UNIT, header: 'U/G', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.CALORIES, header: 'Calories', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.PROTEIN, header: 'Protein', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.CARBOHYDRATES, header: 'Carb.', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.CARB_SUGAR, header: 'Carb Sugar', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.CARB_SUGAR_ADDED, header: 'Sugar Added', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.FAT, header: 'Fat', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.FAT_MONO, header: 'Fat Mono', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.FAT_POLI, header: 'Fat Poli', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.FAT_SAT, header: 'Fat Sat', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.FAT_TRANS, header: 'Fat Trans', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.FIBER, header: 'Fiber', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.CHOLESTEROL, header: 'Cholesterol', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.SODIUM, header: 'Sodium', tableConfig: {
          styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" } }
        },
        { field: FOOD_LIST_COLUMNS_IDS.COST_KILO, header: 'Cost Kilo', tableConfig: {
          styleColumnHeaderCss: { minWidth: "80px", textAlign: "center" } },
          maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2,
                addZeroPad: true,
                addSymbolCurrency: true
            }
          }
        },
        { field: FOOD_LIST_COLUMNS_IDS.COST_GRAM, header: 'Cost Gram', tableConfig: {
          styleColumnHeaderCss: { minWidth: "90px", textAlign: "center" } },
          maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 4,
                addZeroPad: true,
                addSymbolCurrency: true
            }
          }
        },
        { field: FOOD_LIST_COLUMNS_IDS.COST_CALORIE, header: 'Cost Calorie', tableConfig: {
          styleColumnHeaderCss: { minWidth: "90px", textAlign: "center" } },
          maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 4,
                addZeroPad: true,
                addSymbolCurrency: true
            }
          }
        },
        { field: FOOD_LIST_COLUMNS_IDS.COST_PROTEIN, header: 'Cost Protein', tableConfig: {
          styleColumnHeaderCss: { minWidth: "90px", textAlign: "center" } },
          maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 4,
                addZeroPad: true,
                addSymbolCurrency: true
            }
          }
        }
    ];

    export const ADMIN_FOOD_COLUMN_IDS = {
      DESCRIPTION: "description",
      ...FOOD_ELEMENT_COLUMNS_IDS
    }

    export const ADMIN_FOOD_COLUMN_DATA: FormInputContainerPropsI = {
      inputColumns: [
        {
          label: "Description:", columnWidth: "18%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.DESCRIPTION, inputType: InputElementEnum.TEXT, value: null, updateValue: () => { },
            placeholder: "Description"
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Grams:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.QUANTITY, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Unity Grams:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.UNIT, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Calories:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.CALORIES, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Proteins:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.PROTEIN, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Carbohydrates:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.CARBOHYDRATES, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Carb/Sugar:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.CARB_SUGAR, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Sugar Added:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.CARB_SUGAR_ADDED, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Fat:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.FAT, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Fat Mono:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.FAT_MONO, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Fat Poli:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.FAT_POLI, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Fat Sat:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.FAT_SAT, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Fat Trans:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.FAT_TRANS, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Fiber:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.FIBER, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Chol.:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.CHOLESTEROL, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Sodium:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.SODIUM, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Price Kilo:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.COST_KILO, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Cost Gram:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.COST_GRAM, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 4 }, isReadOnly: true
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Cost Calorie:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.COST_CALORIE, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 4 }, isReadOnly: true
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
        {
          label: "Cost Protein:", columnWidth: "9%",
          inputProps: {
            id: ADMIN_FOOD_COLUMN_IDS.COST_PROTEIN, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 4 }, isReadOnly: true
          },
          validations: {
            validatorRules: [Validators.required]
          }
        },
      ],
      containerWidth: "100%"
    }
