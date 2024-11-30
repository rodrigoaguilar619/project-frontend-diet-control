import { FormGroup } from "@angular/forms";
import { ruleOfThree } from "@app/appComponents/utils/dataUtils/calculatorFormulaUtil";
import { ADMIN_FOOD_COLUMN_IDS } from "@app/appModules/app/food/food-constants";

export function initFormFoodEvents(formGroup: FormGroup) {

  if (formGroup.controls[ADMIN_FOOD_COLUMN_IDS.QUANTITY].value !== null && formGroup.controls[ADMIN_FOOD_COLUMN_IDS.CALORIES].value !== null) {
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_KILO].enable({ emitEvent: false });
  }

  formGroup.controls[ADMIN_FOOD_COLUMN_IDS.QUANTITY].valueChanges.subscribe((_value: any) => {
    calculateCosts(formGroup);
  });

  formGroup.controls[ADMIN_FOOD_COLUMN_IDS.CALORIES].valueChanges.subscribe((_value: any) => {
    calculateCosts(formGroup);
  });

  formGroup.controls[ADMIN_FOOD_COLUMN_IDS.PROTEIN].valueChanges.subscribe((_value: any) => {
    calculateCosts(formGroup);
  });

  formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_KILO].valueChanges.subscribe((_value: any) => {
    calculateCosts(formGroup);
  });
}

export function calculateCosts(formGroup: FormGroup) {

  if(formGroup.controls[ADMIN_FOOD_COLUMN_IDS.QUANTITY].value === null) {
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_PROTEIN].reset(null, { emitEvent: false });
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_CALORIE].reset(null, { emitEvent: false });
    return;
  }

  if(formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_KILO].value === null) {
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_PROTEIN].reset(null, { emitEvent: false });
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_CALORIE].reset(null, { emitEvent: false });
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_GRAM].reset(null, { emitEvent: false });
    return;
  }

  if(formGroup.controls[ADMIN_FOOD_COLUMN_IDS.CALORIES].value !== null && formGroup.controls[ADMIN_FOOD_COLUMN_IDS.CALORIES].value !== 0) {
    let caloriesByKilo = ruleOfThree(formGroup.controls[ADMIN_FOOD_COLUMN_IDS.QUANTITY].value, formGroup.controls[ADMIN_FOOD_COLUMN_IDS.CALORIES].value, 1000);
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_CALORIE].setValue(ruleOfThree(caloriesByKilo, formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_KILO].value, 1));
  }
  else
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_CALORIE].reset(null, { emitEvent: false });

  if(formGroup.controls[ADMIN_FOOD_COLUMN_IDS.PROTEIN].value !== null) {
    let proteinByKilo = ruleOfThree(formGroup.controls[ADMIN_FOOD_COLUMN_IDS.QUANTITY].value, formGroup.controls[ADMIN_FOOD_COLUMN_IDS.PROTEIN].value, 1000);
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_PROTEIN].setValue(ruleOfThree(proteinByKilo, formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_KILO].value, 1));
  }
  else
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_PROTEIN].reset(null, { emitEvent: false });

  if(formGroup.controls[ADMIN_FOOD_COLUMN_IDS.QUANTITY].value !== null && formGroup.controls[ADMIN_FOOD_COLUMN_IDS.QUANTITY].value !== 0)
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_GRAM].setValue(ruleOfThree(1000, formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_KILO].value, 1));
  else
    formGroup.controls[ADMIN_FOOD_COLUMN_IDS.COST_GRAM].reset(null, { emitEvent: false });
}
