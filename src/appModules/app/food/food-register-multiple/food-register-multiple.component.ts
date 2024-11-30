import { Component, Injector } from '@angular/core';
import { FoodService } from '../../../controller/services/food.service';
import { ADMIN_FOOD_COLUMN_DATA, ADMIN_FOOD_COLUMN_IDS } from '../food-constants';
import { FormArray, FormGroup } from '@angular/forms';
import { GenericParentComponent } from '@app/appComponents/_generic/generic-parent/generic-parent.component';
import { buildFormArrayFromContainer } from '@app/appComponents/utils/dataUtils/formDataUtil';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import axios from 'axios';
import { calculateCosts, initFormFoodEvents } from '@app/appModules/utils/moduleUtils/FoodRegisterUtil';

@Component({
  selector: 'app-food-register-multiple',
  templateUrl: './food-register-multiple.component.html'
})
export class FoodRegisterMultipleComponent extends GenericParentComponent {

  public formData = ADMIN_FOOD_COLUMN_DATA;
  public formArray: FormArray;

  constructor(injector: Injector, private foodService: FoodService) {
    super(injector);

    this.formArray = buildFormArrayFromContainer(this.formData);

    this.formArray.controls.forEach((formGroup: any) => {
      initFormFoodEvents(formGroup);
    });
  }

  onSubmit() {

    let debugClass = generateDebugClassModule("Register food multiple module");
    debug(debugClass, "start");

    this.formArray.markAllAsTouched();
    if (!this.formArray.valid)
      return;

    this.spinner.show();
    axios.all([this.foodService.registerFoodsService(this.formArray.value)])
      .then(axios.spread((registerFoodMultipleData) => {

        debug(debugClass, "result", registerFoodMultipleData);
        this.toastPrimeInstance.showSuccess("FOOD REGISTER MULTIPLE", "Registered foods successfully");

        if(this.executeOnSubmitFunction)
          this.executeOnSubmitFunction();

        this.spinner.hide();

      }))
      .catch((error) => {
        this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
      });
  }
}

export default FoodRegisterMultipleComponent;
