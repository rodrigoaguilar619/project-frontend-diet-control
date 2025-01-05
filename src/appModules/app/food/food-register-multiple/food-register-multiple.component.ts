import { Component, Injector } from '@angular/core';
import axios from 'axios';
import { FoodService } from '@app/appModules/controller/services/food.service';
import { ADMIN_FOOD_COLUMN_DATA } from '@app/appModules/app/food/food-constants';
import { FormArray, FormGroup } from '@angular/forms';
import { GenericParentComponent } from '@app/appComponents/components/_generic/generic-parent/generic-parent.component';
import { buildFormArrayFromContainer } from '@app/appComponents/utils/dataUtils/formDataUtil';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import { initFormFoodEvents } from '@app/appModules/utils/moduleUtils/FoodRegisterUtil';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import { commonAppComponents } from '@app/appComponents/components/commonComponents.config';

@Component({
  imports: [commonAppModules, commonAppComponents],
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

  executeOnAddArrowCustom(formGroup: FormGroup) {
    initFormFoodEvents(formGroup);
  }

}

export default FoodRegisterMultipleComponent;
