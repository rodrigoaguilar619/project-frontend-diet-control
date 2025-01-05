import { Component, Injector } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import axios from 'axios';
import { FormInputColumnPropsI } from '@app/appComponents/@types/components/formInputs/formInputs';
import { InputElementSelectPropsI } from '@app/appComponents/@types/components/inputs/inputElement';
import { GenericCrudComponent } from '@app/appComponents/components/_generic/generic-parent/generic-crud/generic-crud.component';
import { decimalsZeroPad, digitsZeroPad } from '@app/appComponents/utils/dataUtils/numberDataUtil';
import { FOOD_ELEMENT_COLUMNS_IDS } from '@app/appModules/app/food/food-constants';
import { catalogEnum } from '@app/appModules/catalogs/enumCatalog';
import { CatalogService } from '@app/appModules/controller/services/catalogService';
import { DietService } from '@app/appModules/controller/services/dietService';
import { FoodService } from '@app/appModules/controller/services/food.service';
import { DIET_CUSTOM_RECIPE_DATA, DIET_CUSTOM_RECIPE_DATA_IDS, DIET_FOOD_REGISTER_DATA, DIET_FOOD_REGISTER_DATA_IDS, DIET_FOOD_TOTALS_RESUME_COLUMNS, DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS } from '@app/appModules/app/diet/diet.contants';
import { deepClone } from '@app/appComponents/utils/dataUtils/cloneUtils';
import { commonAppComponents } from '@app/appComponents/components/commonComponents.config';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
@Component({
  imports: [commonAppModules, commonAppComponents],
  selector: 'app-diet-generic-add-edit',
  templateUrl: './diet-generic-add-edit.component.html'
})
export class DietGenericAddEditComponent extends GenericCrudComponent {

  protected dietService: DietService;
  protected foodService: FoodService;
  protected catalogService: CatalogService;

  public dataTableSectionsProperties = { header: false, footer: false, search: false, pagination: false }

  public foodListValues: any = [];
  public foodResumeValues: any = [];
  public dietFoodTotalRegisteredValues: Record<string, any> = {};
  public dietFoodTotalUpdatedValues: Record<string, any> = {};
  public dietFoodTotalFormatedValues: Record<string, any> = {};

  public foodListColumns = DIET_FOOD_TOTALS_RESUME_COLUMNS;
  public dietRecipeData = deepClone(DIET_CUSTOM_RECIPE_DATA);
  public dietFoodListColumns = DIET_FOOD_REGISTER_DATA;
  public dietFoodTotalsColumnsIds = DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS;
  public foodColumnsIds: Record<string, any> = FOOD_ELEMENT_COLUMNS_IDS;
  public formArray: FormArray;
  public formGroupRecipe: FormGroup;

  constructor(injector: Injector) {
    super(injector);
    this.dietService = injector.get(DietService);
    this.foodService = injector.get(FoodService);
    this.catalogService = injector.get(CatalogService);

    this.formArray = this.formBuilder.array([]);
    this.formGroupRecipe = this.formBuilder.group({});

    //remove from dietFoodTotalsColumnsIds
    delete this.foodColumnsIds["COST_KILO"];
  }

  /**
   * Builds the HTML structure for comparing and displaying previous and updated values.
   *
   * @param {any} valuePrevious - The previous value to compare.
   * @param {any} valueUpdated - The updated value to compare.
   * @return {string} The HTML structure for displaying the comparison.
   */
  buildResumeValue(valuePrevious: any, valueUpdated: any) {

    let valuePreviousNew = valuePrevious != undefined ? valuePrevious.toFixed(2) : Number(0.0);
    let valueUpdatedNew = valueUpdated != undefined && !isNaN(valueUpdated) ? valueUpdated.toFixed(2) : Number(0.0);

    valuePreviousNew = digitsZeroPad(valuePreviousNew, 4);
    valueUpdatedNew = digitsZeroPad(valueUpdatedNew, 4);

    return (
      "<div class='valueComparator'><div>"
      + decimalsZeroPad(valuePreviousNew, 2)
      + "</div><div>&nbsp;/&nbsp;</div><div class='valueComparatorDynamic'><b>"+ decimalsZeroPad(valueUpdatedNew, 2)
      + "</b></div></div>");
  }

  /**
   * Formats the diet food totals into a record object.
   *
   * @return {Record<string, any>[]} An array containing a record object with the formatted diet food totals.
   */
  getDietFoodsTotalsFormatted() {

    return this.buildFoodsTotalsFormatted(this.dietFoodTotalRegisteredValues, this.dietFoodTotalUpdatedValues);
  }

  buildFoodsTotalsFormatted(totalRegisteredValues: Record<string, any>, totalUpdatedValues: Record<string, any>) {

    let dietFoodTotal: Record<string, any> = {};

    Object.values(this.dietFoodTotalsColumnsIds).forEach((value) => {
      dietFoodTotal[value] = this.buildResumeValue(totalRegisteredValues[value], totalUpdatedValues[value]);
    });

    return dietFoodTotal;
  }


  getCatalogs(): Promise<void> {

    return axios.all([this.dietService.getDietBaseService(), this.catalogService.getCatalogService(catalogEnum.FOOD), this.catalogService.getCatalogRecipeService()])
    .then(axios.spread((dietBaseData, catalogFoodData, catalogRecipeData) => {

      this.foodListValues = dietBaseData.data.foods;
      this.foodResumeValues = [{...dietBaseData.data.diet}];

      this.dietRecipeData.inputColumns.forEach((column: FormInputColumnPropsI) => {
        if (column.inputProps.id === DIET_CUSTOM_RECIPE_DATA_IDS.ID) {
          (column.inputProps as InputElementSelectPropsI).options = catalogRecipeData.data.catalogs;
        }
      });

      this.dietFoodListColumns.inputColumns.forEach((column: FormInputColumnPropsI) => {
        if (column.inputProps.id === DIET_FOOD_REGISTER_DATA_IDS.ID) {
          (column.inputProps as InputElementSelectPropsI).options = catalogFoodData.data.catalogs;
        }
      });
    }));

  }

/**
 * Executes the logic when the "add arrow" is triggered.
 * When food select is changed, scan fields of portions and units to disable or enable them,
 * reset all other fields; and updates table totals.
 * Events added for portions and units, to update data in real time.
 *
 * @param {FormGroup} formGroup - The form group containing the input values.
 * @return {void} This function does not return a value.
 */
  executeOnAddArrow(formGroup: FormGroup, updateFormFoodsFunction: Function, calculateTotalsFunction: Function) {

    this.scanFieldDietFood(formGroup);
    formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.ID].valueChanges.subscribe((_value) => {

      formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.PORTIONS].reset(null, { emitEvent: false });
      formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.UNITIES].reset(null, { emitEvent: false });

      this.scanFieldDietFood(formGroup);

      Object.values(this.foodColumnsIds).forEach((value) => {
        formGroup.controls[value].reset(null, { emitEvent: false });
      });

      calculateTotalsFunction();
    });

    formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.UNITIES].valueChanges.subscribe((_value) => {
      updateFormFoodsFunction(DIET_FOOD_REGISTER_DATA_IDS.UNITIES, formGroup);
    });

    formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.PORTIONS].valueChanges.subscribe((_value) => {
      updateFormFoodsFunction(DIET_FOOD_REGISTER_DATA_IDS.PORTIONS, formGroup);
    });
  }

  executeOnRemoveArrow(_index: number) {
    this.updateDietFoodsTotals();
  }

  scanFieldDietFood(formGroup: FormGroup) {

    if (formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.ID].value === null) {
      formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.PORTIONS].disable({ emitEvent: false });
      formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.UNITIES].disable({ emitEvent: false });
    }
    else{
      formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.PORTIONS].enable({ emitEvent: false });
      formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.UNITIES].enable({ emitEvent: false });
    }
  }

  getValueTotal(value: number, portions: number) {
    let result = (value * portions);
    return !isNaN(result) ? result.toFixed(2) : Number(0.0).toFixed(2);
  }

  /**
   * Updates the form fields based on the provided tagId and formGroup.
   *
   * @param {string} tagId - The identifier for the form field to update.
   * @param {FormGroup} formGroup - The form group containing the fields to be updated.
   */
  updateFormFoods(tagId: string, formGroup: FormGroup): Promise<any> {

    if (formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.ID].value === undefined || formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.ID].value === null)
      return Promise.resolve(null);

    return this.foodService.getFoodService(formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.ID].value).then((foodData: any) => {

      let food: any = foodData.data.food;

      let portions = formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.PORTIONS].value;

      formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.UNIT].setValue(food.unityGrams, {emitEvent:false});

      if (tagId === DIET_FOOD_REGISTER_DATA_IDS.UNITIES) {
        portions = (formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.UNITIES].value * food.unityGrams) / food.quantityGrams;
        formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.PORTIONS].setValue(portions, {emitEvent:false});
      }
      else if (tagId === DIET_FOOD_REGISTER_DATA_IDS.PORTIONS) {
        formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.UNITIES].setValue(
          Number(food.unityGrams) !== 0.0
            ? ((portions * food.quantityGrams) / food.unityGrams).toFixed(2) : 0.0, {emitEvent:false}
          );
      }

      Object.keys(this.foodColumnsIds).forEach((key) => {

        let ignoreKeys = [
          DIET_FOOD_REGISTER_DATA_IDS.COST_GRAM,
          DIET_FOOD_REGISTER_DATA_IDS.COST_CALORIE,
          DIET_FOOD_REGISTER_DATA_IDS.COST_PROTEIN
        ];

        let foodColumnValue: any = this.foodColumnsIds[key as keyof typeof this.foodColumnsIds];

        if (foodColumnValue !== DIET_FOOD_REGISTER_DATA_IDS.UNIT && !ignoreKeys.includes(key)) {
          formGroup.controls[foodColumnValue].setValue(this.getValueTotal(food[foodColumnValue], portions));
        }
      });

      formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.COST_GRAM].setValue(formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.QUANTITY].value * food.costGram, {emitEvent:false});
      formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.COST_CALORIE].setValue(formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.CALORIES].value * food.costCalorie, {emitEvent:false});
      formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.COST_PROTEIN].setValue(formGroup.controls[DIET_FOOD_REGISTER_DATA_IDS.PROTEIN].value * food.costProtein, {emitEvent:false});

      this.updateDietFoodsTotals();
    });
  }

  /**
   * Updates the total values of various diet food properties based on the formArray controls.
   */
  updateDietFoodsTotals() {

    let dietFoodTotalUpdatedObject = this.dietFoodTotalUpdatedValues;

    Object.values(DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS).forEach((value) => {
      dietFoodTotalUpdatedObject[value] = 0;
    });

    this.formArray.controls.forEach((formControl: any) => {
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CALORIES] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.CALORIES].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_QUANTITY_GRAMS] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.QUANTITY].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_PROTEINS] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.PROTEIN].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARBOHYDRATES] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.CARBOHYDRATES].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARB_SUGAR] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.CARB_SUGAR].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARB_SUGAR_ADDED] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.CARB_SUGAR_ADDED].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.FAT].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_MONO] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.FAT_MONO].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_POLI] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.FAT_POLI].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_SAT] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.FAT_SAT].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_TRANS] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.FAT_TRANS].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FIBER] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.FIBER].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CHOLESTEROL] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.CHOLESTEROL].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_SODIUM] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.SODIUM].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_COST_GRAM] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.COST_GRAM].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_COST_CALORIE] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.COST_CALORIE].value);
      dietFoodTotalUpdatedObject[DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_COST_PROTEIN] += Number(formControl.controls[DIET_FOOD_REGISTER_DATA_IDS.COST_PROTEIN].value);
    });
    this.dietFoodTotalUpdatedValues = dietFoodTotalUpdatedObject;
    this.dietFoodTotalFormatedValues = this.getDietFoodsTotalsFormatted();
  }
}
