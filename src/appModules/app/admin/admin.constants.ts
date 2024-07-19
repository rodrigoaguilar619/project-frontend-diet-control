import { Validators } from "@angular/forms";
import { DataTablePropsI } from "@app/appComponents/@types/components/dataTable/dataTable";
import { FormInputContainerPropsI } from "@app/appComponents/@types/components/formInputs/formInputs";
import { InputElementEnum, InputMaskEnum, MaskDataTypeEnum } from "@app/appComponents/catalogs/enumCatalog";

export const ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS = {
  CALORIES: "calories",
  PROTEINS: "proteins",
  CARBOHYDRATES: "carbohydrates",
  FAT: "fat",
  CARB_SUGAR: "carbSugar",
  CARB_SUGAR_ADDED: "carbSugarAdded",
  FAT_MONO: "fatMono",
  FAT_POLI: "fatPoli",
  FAT_SAT: "fatSat",
  FAT_TRANS: "fatTrans",
  FIBER: "fiber",
  CHOLESTEROL: "cholesterol",
  SODIUM: "sodium",
}

export const ADMIN_NUTRITIONAL_GOALS_COLUMNS: DataTablePropsI[] = [
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.CALORIES, header: 'Calories', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.PROTEINS, header: 'Proteins', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.CARBOHYDRATES, header: 'Carb.', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.CARB_SUGAR, header: 'Carb. Sugar', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.CARB_SUGAR_ADDED, header: 'Sugar Added', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.FAT, header: 'Fat', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.FAT_MONO, header: 'Fat Mono', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.FAT_POLI, header: 'Fat Poli', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.FAT_SAT, header: 'Fat Sat', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.FAT_TRANS, header: 'Fat Trans', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.FIBER, header: 'Fiber', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.CHOLESTEROL, header: 'Chol.', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: ADMIN_NUTRITIONAL_GOALS_COLUMNS_IDS.SODIUM, header: 'Sodium', tableConfig: {
      styleColumnHeaderCss: { width: "80px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
];

export const ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS = {
  CALORIES: "calories",
  PROTEINS: "proteins",
  CARBOHYDRATES: "carbohydrates",
  FAT: "fat",
  CARB_SUGAR: "carbSugar",
  CARB_SUGAR_ADDED: "carbSugarAdded",
  FAT_MONO: "fatMono",
  FAT_POLI: "fatPoli",
  FAT_SAT: "fatSat",
  FAT_TRANS: "fatTrans",
  FIBER: "fiber",
  CHOLESTEROL: "cholesterol",
  SODIUM: "sodium",
}

export const ADMIN_NUTRITIONAL_GOALS_REGISTER_DATA: FormInputContainerPropsI = {
  inputColumns: [
    {
      label: "Calories:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.CALORIES, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Proteins:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.PROTEINS, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Carbohydrates:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.CARBOHYDRATES, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Carb/Sugar:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.CARB_SUGAR, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Sugar Added:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.CARB_SUGAR_ADDED, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Fat:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FAT, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Fat Mono:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FAT_MONO, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Fat Poli:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FAT_POLI, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Fat Sat:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FAT_SAT, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Fat Trans:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FAT_TRANS, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Fiber:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FIBER, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Cholesterol:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.CHOLESTEROL, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    },
    {
      label: "Sodium:", columnWidth: "14.2%",
      inputProps: {
        id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.SODIUM, inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
        maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
      },
      validations: {
        validatorRules: [Validators.required]
      }
    }
  ],
  columnstotal: 7,
  containerWidth: "100%"
}

/*export const ADMIN_NUTRITIONAL_GOALS_REGISTER_DATA = {
  CALORIES: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.CALORIES, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Calories:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false },
    validators: [Validators.required]
  },
  PROTEINS: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.PROTEINS, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Proteins:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  },
  CARBOHYDRATES: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.CARBOHYDRATES, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Carbohydrates:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  },
  FAT: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FAT, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Fat:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  },
  CARB_SUGAR: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.CARB_SUGAR, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Carb Sugar:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  },
  CARB_SUGAR_ADDED: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.CARB_SUGAR_ADDED, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Sugar Add:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  },
  FAT_MONO: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FAT_MONO, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Fat Mono:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  },
  FAT_POLI: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FAT_POLI, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Fat Poli:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  },
  FAT_SAT: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FAT_SAT, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Fat Sat:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  },
  FAT_TRANS: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FAT_TRANS, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Fat Trans:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  },
  FIBER: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.FIBER, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Fiber:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  },
  CHOLESTEROL: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.CHOLESTEROL, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Chol.:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  },
  SODIUM: {
    value: "", id: ADMIN_NUTRITIONAL_GOALS_REGISTER_IDS.SODIUM, inputType: enumFormElementType.INPUT,
    inputProperties: { label: "Sodium:", styleProperties: { typeAlign: enumFormStyleTypeAlign.DYNAMIC_LINE } },
    columnProperties: { width: "100%" },
    tagProperties: { disable: false }
  }
}*/