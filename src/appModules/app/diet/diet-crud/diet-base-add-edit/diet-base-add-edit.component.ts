import { Component, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { buildFormGroupFromContainers, validateForm } from '@app/appComponents/utils/dataUtils/formDataUtil';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import axios from 'axios';
import { DIET_ADD_EDIT_TOTALS_COLUMNS_ONE, DIET_ADD_EDIT_TOTALS_COLUMNS_TWO } from '../../diet.contants';
import { DietGenericAddEditComponent } from '../diet-generic-add-edit/diet-generic-add-edit.component';

@Component({
  selector: 'app-diet-base-add-edit',
  templateUrl: './diet-base-add-edit.component.html'
})
export class DietBaseAddEditComponent extends DietGenericAddEditComponent {

  public dietFoodTotalsOneColumns = DIET_ADD_EDIT_TOTALS_COLUMNS_ONE;
  public dietFoodTotalsTwoColumns = DIET_ADD_EDIT_TOTALS_COLUMNS_TWO;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.getDietBaseService();
  }
    getDietBaseService() {

      let debugClass = generateDebugClassModule("init add/edit diet base module");
      debug(debugClass, "start");
  
      this.spinner.show();

      this.getCatalogs()
          .then(() => {
              return this.dietService.getDietBaseService();
          })
          .then((dietBaseData) => {
  
              debug(debugClass, "result", dietBaseData);
              this.dietFoodTotalRegisteredValues = {...dietBaseData.data.diet};
              this.dietFoodTotalUpdatedValues = {...dietBaseData.data.diet};
              this.dietFoodTotalFormatedValues = this.getDietFoodsTotalsFormatted();

              if(dietBaseData.data.recipe !== null && Object.keys(dietBaseData.data).length > 0) {

                this.formGroupRecipe.addControl("idRecipe", this.formBuilder.control(dietBaseData.data.recipe.id));
              
                dietBaseData.data.foods.forEach((food: any) => {
                  let formGroup: FormGroup = buildFormGroupFromContainers([this.dietFoodListColumns]);
                  formGroup.patchValue(food);
                  this.executeOnAddArrow(formGroup, this.updateFormFoods.bind(this), this.updateDietFoodsTotals.bind(this));
                  this.formArray.push(formGroup);
                });
              }

              this.spinner.hide();
  
          })
          .catch((error) => {
              this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
          });
    }

    executeOnAddArrowBase(formGroup: FormGroup) {
      this.executeOnAddArrow(formGroup, this.updateFormFoods.bind(this), this.updateDietFoodsTotals.bind(this));
    }

    onSubmit() {

      let debugClass = generateDebugClassModule("add/edit diet base module");
      debug(debugClass, "start");

      if (!validateForm(this.formArray, this.elementRef)) {
        return;
      }

      this.spinner.show();
      axios.all([this.dietService.registerDietBaseService(this.formGroupRecipe.controls["idRecipe"].value, this.formArray.value)])
        .then(axios.spread((dietBaseRegisterData) => {

          debug(debugClass, "result", dietBaseRegisterData);
          this.toastPrimeInstance.showSuccess("DIET BASE DATA", "Diet base registered successfully");

          if (this.executeOnSubmitFunction)
            this.executeOnSubmitFunction();

          this.spinner.hide();

        }))
        .catch((error) => {
          this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
        });
    }

}

export default DietBaseAddEditComponent;