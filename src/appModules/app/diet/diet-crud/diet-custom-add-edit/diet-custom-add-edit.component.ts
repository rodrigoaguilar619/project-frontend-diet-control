import { Component, Injector, Input } from '@angular/core';
import { DietGenericAddEditComponent } from '../diet-generic-add-edit/diet-generic-add-edit.component';
import { FormGroup } from '@angular/forms';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import { buildFormGroupFromContainers, validateForm } from '@app/appComponents/utils/dataUtils/formDataUtil';
import { DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS, DIET_CUSTOM_RECIPE_DATA_IDS, DIET_CUSTOM_TOTALS_RESUME_COLUMNS, DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS } from '../../diet.contants';
import { dataTablePropertiesEnum } from '@app/appModules/catalogs/enumCatalog';
import axios from 'axios';
import { FormInputColumnPropsI } from '@app/appComponents/@types/components/formInputs/formInputs';
import { AdminService } from '@app/appModules/controller/services/admin.service';
import { capitalizeFirstLetter } from '@app/appComponents/utils/dataUtils/dataUtil';

@Component({
  selector: 'app-diet-custom-add-edit',
  templateUrl: './diet-custom-add-edit.component.html'
})
export class DietCustomAddEditComponent extends DietGenericAddEditComponent {

  public adminService: AdminService;

  public subTotalDietBase = {};
  public subTotalDietCustom = {};
  public subTotalDietCustomRegistered = {};
  public totalDietCustomRegistered = {};
  public totalDietCustomUpdated = {};
  public nutritionalGoals: any = {};
  public valuesFoodsDietBase: any = [];
  public valuesFoodsDietCustom: any = [];


  public totalDietCustomResumeColumns = DIET_CUSTOM_TOTALS_RESUME_COLUMNS;
  public totalDietCustomResumeValues: any = [];

  @Input() idDietCustom: any = null;

  constructor(injector: Injector) {
    super(injector);

    this.adminService = injector.get(AdminService);
  }

  ngOnInit(): void {
    this.formGroupRecipe = buildFormGroupFromContainers([this.dietRecipeData]);

    if(this.idDietCustom != null) {
      this.getDietCustomService(this.idDietCustom);
    }
    else {
      this.initDietCustomServices();
    }
  }

  calculateTotalResumeRegistered(subTotalDietBase: any, subTotalDietCustom: any) {

    let dietFoodTotal: Record<string, any> = {};

    Object.values(this.dietFoodTotalsColumnsIds).forEach((value) => {
      dietFoodTotal[value] = subTotalDietBase[value] + subTotalDietCustom[value];
    });

    return dietFoodTotal;
  }

  calculateTotalResume(totalDietCustomRegistered: any, totalDietCustomUpdated: any) {

    let dietFoodTotal: Record<string, any> = {};

    Object.values(this.dietFoodTotalsColumnsIds).forEach((value) => {
      dietFoodTotal[value] = this.buildResumeValue(totalDietCustomRegistered[value], totalDietCustomUpdated[value]);
    });

    return dietFoodTotal;
  }

  buildTotalsResume() {

    this.totalDietCustomUpdated = this.calculateTotalResumeRegistered(this.subTotalDietBase, this.dietFoodTotalUpdatedValues);
    this.totalDietCustomResumeValues = [
      {[DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTALS_TITLE]: "Subtotal diet base", ...this.subTotalDietBase},
      {[DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTALS_TITLE]: "Subtotal diet custom", ...this.dietFoodTotalFormatedValues},
      {
        rowCssProperties: { backgroundColor: dataTablePropertiesEnum.colorTotals, fontWeight: '700' },
        [DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTALS_TITLE]: "Totals", ...this.calculateTotalResume(this.totalDietCustomRegistered, this.totalDietCustomUpdated)
      },
      {
        rowCssProperties: { backgroundColor: dataTablePropertiesEnum.colorTotals, fontWeight: '700' },
        [DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTALS_TITLE]: "Nutrition goals",
        ...this.nutritionalGoals,
        [DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_QUANTITY_GRAMS]: "--"
      },
    ];
  }
  
  updateDietFoodsTotalsCustom() {

    this.updateDietFoodsTotals();
    this.buildTotalsResume();
  }

  updateFormFoodsCustom(tagId: string, formGroup: FormGroup) {
    this.updateFormFoods(tagId, formGroup).then(() => {
      this.buildTotalsResume();
    });
  }

  initDietCustomServices() {

      let debugClass = generateDebugClassModule("init diet custom module");
      debug(debugClass, "start");
  
      this.spinner.show();

      let formGroup: FormGroup = buildFormGroupFromContainers([this.dietFoodListColumns]);
      this.executeOnAddArrow(formGroup, this.updateFormFoodsCustom.bind(this), this.updateDietFoodsTotalsCustom.bind(this));
      this.formArray.push(formGroup);

      this.getCatalogs()
          .then(() => {
              return axios.all([this.dietService.getDietBaseService(), this.adminService.getNutritionalGoalService()]);
          })
          .then(axios.spread((dietBaseData, nutritionalGoalData) => {
            this.subTotalDietBase = dietBaseData.data.diet;

            this.totalDietCustomRegistered = dietBaseData.data.diet;
            this.totalDietCustomUpdated = dietBaseData.data.diet;

            Object.keys(nutritionalGoalData.data.nutritionGoal).forEach((key) => {
              let newKey: any =  "total" + capitalizeFirstLetter(key);
              this.nutritionalGoals[newKey] = nutritionalGoalData.data.nutritionGoal[key];
            });

            this.updateDietFoodsTotals();
            this.buildTotalsResume();

            this.spinner.hide();
          }))
          .catch((error) => {
              this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
          });
  }

  getDietCustomService(idDietCustom: number) {

    let debugClass = generateDebugClassModule("init add/edit diet custom module");
      debug(debugClass, "start");

      this.spinner.show();

      this.dietRecipeData.inputColumns.forEach((column: FormInputColumnPropsI) => {
        if (column.inputProps.id === DIET_CUSTOM_RECIPE_DATA_IDS.ID) {
          column.inputProps.isReadOnly = true;
        }
      });

      this.getCatalogs()
          .then(() => {
              return this.dietService.getDietCustomService(idDietCustom);
          })
          .then((dietCustomData) => {
  
              debug(debugClass, "result", dietCustomData);
              this.subTotalDietBase = dietCustomData.data.subTotalDietBase;
              this.subTotalDietCustom = dietCustomData.data.subTotalDietCustom;

              this.nutritionalGoals = dietCustomData.data.nutritionalGoals;
              this.dietFoodTotalRegisteredValues = dietCustomData.data.subTotalDietCustom;
              this.dietFoodTotalUpdatedValues = dietCustomData.data.subTotalDietCustom;
              this.dietFoodTotalFormatedValues = this.getDietFoodsTotalsFormatted();
              this.totalDietCustomUpdated = this.calculateTotalResumeRegistered(this.subTotalDietBase, this.subTotalDietCustom);
              this.totalDietCustomRegistered = this.calculateTotalResumeRegistered(this.subTotalDietBase, this.dietFoodTotalRegisteredValues);

              if(dietCustomData.data.dietCustom.recipe !== null) {

                this.formGroupRecipe.patchValue(dietCustomData.data.dietCustom.recipe);
                
                dietCustomData.data.dietCustom.foods.forEach((food: any) => {
                  let formGroup: FormGroup = buildFormGroupFromContainers([this.dietFoodListColumns]);
                  formGroup.patchValue(food);
                  this.executeOnAddArrow(formGroup, this.updateFormFoodsCustom.bind(this), this.updateDietFoodsTotalsCustom.bind(this));
                  this.formArray.push(formGroup);
                });
              }

              this.buildTotalsResume();

              this.spinner.hide();
  
          })
          .catch((error) => {
              this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
          });
  }

  executeOnAddArrowCustom(formGroup: FormGroup) {
    this.executeOnAddArrow(formGroup, this.updateFormFoodsCustom.bind(this), this.updateDietFoodsTotalsCustom.bind(this));
    this.buildTotalsResume();
  }

  executeOnRemoveArrowCustom(index: number) {
    this.executeOnRemoveArrow(index);
    this.buildTotalsResume();
  }

  onSubmit() {

    let debugClass = generateDebugClassModule("add/edit diet custom module");
    debug(debugClass, "start");

    if ((this.idDietCustom == null && !validateForm(this.formGroupRecipe, this.elementRef)) || !validateForm(this.formArray, this.elementRef)) {
      return;
    }

    this.spinner.show();
    axios.all([this.dietService.addEditDietCustomService(this.idDietCustom == null, this.formGroupRecipe.controls[DIET_CUSTOM_RECIPE_DATA_IDS.ID].value, this.formArray.value)])
      .then(axios.spread((dietBaseRegisterData) => {

        debug(debugClass, "result", dietBaseRegisterData);
        this.toastPrimeInstance.showSuccess("DIET CUSTOM DATA", "Diet custom registered successfully");

        if (this.executeOnSubmitFunction)
          this.executeOnSubmitFunction();

        this.spinner.hide();

      }))
      .catch((error) => {
        this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
      });
  }

}

export default DietCustomAddEditComponent;