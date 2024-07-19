import { Validators } from "@angular/forms";
import { FOOD_LIST_COLUMNS_IDS } from "../food/food-constants";
import { DataTablePropsI } from "@app/appComponents/@types/components/dataTable/dataTable";
import { InputElementEnum, InputMaskEnum, MaskDataTypeEnum } from "@app/appComponents/catalogs/enumCatalog";
import { FormInputContainerPropsI } from "@app/appComponents/@types/components/formInputs/formInputs";

export const DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS = {
  TOTAL_CALORIES: "totalCalories",
  TOTAL_CARBOHYDRATES: "totalCarbohydrates",
  TOTAL_FAT: "totalFat",
  TOTAL_PROTEINS: "totalProteins",
  TOTAL_QUANTITY_GRAMS: "totalQuantityGrams",
  TOTAL_CARB_SUGAR: "totalCarbSugar",
  TOTAL_CARB_SUGAR_ADDED: "totalCarbSugarAdded",
  TOTAL_FAT_MONO: "totalFatMono",
  TOTAL_FAT_POLI: "totalFatPoli",
  TOTAL_FAT_SAT: "totalFatSat",
  TOTAL_FAT_TRANS: "totalFatTrans",
  TOTAL_FIBER: "totalFiber",
  TOTAL_CHOLESTEROL: "totalCholesterol",
  TOTAL_SODIUM: "totalSodium",
}

export const DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS = {
  TOTALS_TITLE: "totalsTitle",
  ...DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS
}

export const DIET_FOOD_REGISTER_DATA_IDS = {
  ID: "id",
  PORTIONS: "portions",
  UNITIES: "unities",
  ...FOOD_LIST_COLUMNS_IDS
}

export const DIET_FOOD_COLUMNS_IDS = {
  ID: "id",
  PORTIONS: "portions",
  UNITIES: "unities",
  ...FOOD_LIST_COLUMNS_IDS
}

export const DIET_CUSTOM_FOOD_COLUMNS_IDS = {
  ID: "id",
  RECIPE_TITLE: "recipeTitle",
  ...DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS
}

export const DIET_CUSTOM_RECIPE_DATA_IDS = {
  ID: "id"
}

export const DIET_FOOD_TOTALS_RESUME_COLUMNS: DataTablePropsI[] = [
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_QUANTITY_GRAMS, header: 'Total Grams', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CALORIES, header: 'Total Calories', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_PROTEINS, header: 'Total Proteins', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARBOHYDRATES, header: 'Total Carb.', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARB_SUGAR, header: 'Total Carb Sugar', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARB_SUGAR_ADDED, header: 'Total Sugar Added', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT, header: 'Total Fat', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_MONO, header: 'Total Fat Mono', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_POLI, header: 'Total Fat Poli', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_SAT, header: 'Total Fat Sat', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_TRANS, header: 'Total Fat Trans', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FIBER, header: 'Total Fiber', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CHOLESTEROL, header: 'Total Cholesterol', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_SODIUM, header: 'Total Sodium', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
];

export const DIET_CUSTOM_TOTALS_RESUME_COLUMNS: DataTablePropsI[] = [
  { field: DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTALS_TITLE, header: 'Totals', tableConfig: {
    styleColumnHeaderCss: { minWidth: "150px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" }, isColumnFreeze: true },
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_QUANTITY_GRAMS, header: 'Total Grams', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CALORIES, header: 'Total Calories', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_PROTEINS, header: 'Total Proteins', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARBOHYDRATES, header: 'Total Carb.', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARB_SUGAR, header: 'Total Carb Sugar', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARB_SUGAR_ADDED, header: 'Total Sugar Added', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT, header: 'Total Fat', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_MONO, header: 'Total Fat Mono', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_POLI, header: 'Total Fat Poli', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_SAT, header: 'Total Fat Sat', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_TRANS, header: 'Total Fat Trans', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FIBER, header: 'Total Fiber', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CHOLESTEROL, header: 'Total Cholesterol', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } } 
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_SODIUM, header: 'Total Sodium', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } } ,
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
];

export const DIET_FOOD_COLUMNS: DataTablePropsI[] = [
  { field: DIET_FOOD_COLUMNS_IDS.DESCRIPTION, header: 'Description', tableConfig: {
    styleColumnHeaderCss: { minWidth: "300px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "left" }, isColumnFreeze: true },
  },
  { field: DIET_FOOD_COLUMNS_IDS.PORTIONS, header: 'Portions', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.UNITIES, header: 'Unities', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.QUANTITY, header: 'Grams', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.CALORIES, header: 'Calories', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.PROTEIN, header: 'Proteins', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.CARBOHYDRATES, header: 'Carb.', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.CARB_SUGAR, header: 'Carb. Sugar', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.CARB_SUGAR_ADDED, header: 'Sugar Added', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.FAT, header: 'Fat', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.FAT_MONO, header: 'Fat mono', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.FAT_POLI, header: 'Fat poli', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.FAT_SAT, header: 'Fat sat', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.FAT_TRANS, header: 'Fat trans', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.FIBER, header: 'Fiber', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.CHOLESTEROL, header: 'Chol.', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  },
  { field: DIET_FOOD_COLUMNS_IDS.SODIUM, header: 'Sodium', tableConfig: {
    styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } },
    maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
  }
];

export const DIET_ADD_EDIT_TOTALS_COLUMNS_ONE: DataTablePropsI[] = [
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_QUANTITY_GRAMS, header: 'Total Grams', tableConfig: {
    styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CALORIES, header: 'Total Calories', tableConfig: {
    styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_PROTEINS, header: 'Total Proteins', tableConfig: {
    styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARBOHYDRATES, header: 'Total Carbohydrates', tableConfig: {
    styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARB_SUGAR, header: 'Total Carb Sugar', tableConfig: {
    styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARB_SUGAR_ADDED, header: 'Total Sugar Added', tableConfig: {
    styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } }
  },
  { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT, header: 'Total Fat', tableConfig: {
    styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
    styleColumnCellCss: { textAlign: "center" } }
  }
];

  export const DIET_ADD_EDIT_TOTALS_COLUMNS_TWO: DataTablePropsI[] = [
    { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_MONO, header: 'Total Fat Mono', tableConfig: {
      styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } }
    },
    { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_POLI, header: 'Total Fat Poli', tableConfig: {
      styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } }
    },
    { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_SAT, header: 'Total Fat Sat', tableConfig: {
      styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } }
    },
    { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_TRANS, header: 'Total Fat Trans', tableConfig: {
      styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } }
    },
    { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CHOLESTEROL, header: 'Total Cholesterol', tableConfig: {
      styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } }
    },
    { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FIBER, header: 'Total Fiber', tableConfig: {
      styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } }
    },
    { field: DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_SODIUM, header: 'Total Sodium', tableConfig: {
      styleColumnHeaderCss: { width: "14.2%", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } }
    },
];

  export const DIET_CUSTOM_RECIPE_DATA: FormInputContainerPropsI = {
    inputColumns: [
    {
      label: "Recipe:", columnWidth: "100%",
      inputProps: {
        id: DIET_CUSTOM_RECIPE_DATA_IDS.ID, inputType: InputElementEnum.SELECT, value: null, updateValue: () => { },
        options: [],
        placeholder: "Recipe"
      },
      validations: {
        validatorRules: [Validators.required]
      }
    }
  ],
  };

  export const DIET_FOOD_REGISTER_DATA: FormInputContainerPropsI = {
    inputColumns: [
      {
        label: "Food:", columnWidth: "30%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.ID, inputType: InputElementEnum.SELECT, value: null, updateValue: () => { },
          options: [],
          placeholder: "Food"
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Portions:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.PORTIONS, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Unities:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.UNITIES, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Unity Grams:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.UNIT, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Grams:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.QUANTITY, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Calories:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.CALORIES, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Proteins:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.PROTEIN, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Carbohydrates:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.CARBOHYDRATES, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Carb/Sugar:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.CARB_SUGAR, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Sugar Added:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.CARB_SUGAR_ADDED, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Fat:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.FAT, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Fat Mono:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.FAT_MONO, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Fat Poli:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.FAT_POLI, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Fat Sat:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.FAT_SAT, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Fat Trans:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.FAT_TRANS, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Fiber:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.FIBER, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Chol.:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.CHOLESTEROL, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
      {
        label: "Sodium:", columnWidth: "10%",
        inputProps: {
          id: DIET_FOOD_REGISTER_DATA_IDS.SODIUM, inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
          maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }, isReadOnly: true
        },
        validations: {
          validatorRules: [Validators.required]
        }
      },
    ],
    containerWidth: "100%"
  }

  /*---------------------- DIET CUSTOM ----------------------*/

  export const DIET_CUSTOM_FOOD_COLUMNS: DataTablePropsI[] = [
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.RECIPE_TITLE, header: 'Recipe Title', tableConfig: {
      styleColumnHeaderCss: { minWidth: "300px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "left" }, isColumnFreeze: true },

    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_QUANTITY_GRAMS, header: 'Total Grams', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_CALORIES, header: 'Total Calories', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_PROTEINS, header: 'Total Proteins', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_CARBOHYDRATES, header: 'Total Carb.', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_CARB_SUGAR, header: 'Total Carb. Sugar', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_CARB_SUGAR_ADDED, header: 'Total Sugar Added', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_FAT, header: 'Total Fat', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_FAT_MONO, header: 'Total Fat mono', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_FAT_POLI, header: 'Total Fat poli', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_FAT_SAT, header: 'Total Fat sat', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_FAT_TRANS, header: 'Total Fat trans', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_FIBER, header: 'Total Fiber', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_CHOLESTEROL, header: 'Total Chol.', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_CUSTOM_FOOD_COLUMNS_IDS.TOTAL_SODIUM, header: 'Total Sodium', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    }
  ];

  export const DIET_CUSTOM_DETAIL_FOOD_COLUMNS: DataTablePropsI[] = [
    { field: DIET_FOOD_COLUMNS_IDS.DESCRIPTION, header: 'Description', tableConfig: {
      styleColumnHeaderCss: { minWidth: "150px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "left" } },
    },
    { field: DIET_FOOD_COLUMNS_IDS.PORTIONS, header: 'Portions', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_FOOD_COLUMNS_IDS.QUANTITY, header: 'Grams', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_FOOD_COLUMNS_IDS.CALORIES, header: 'Calories', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_FOOD_COLUMNS_IDS.CARBOHYDRATES, header: 'Carb.', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_FOOD_COLUMNS_IDS.PROTEIN, header: 'Prot.', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
    { field: DIET_FOOD_COLUMNS_IDS.FAT, header: 'Fat', tableConfig: {
      styleColumnHeaderCss: { minWidth: "60px", textAlign: "center" },
      styleColumnCellCss: { textAlign: "center" } },
      maskProps: { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true } }
    },
  ];