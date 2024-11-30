import { Component, Injector, Input } from '@angular/core';
import { ADMIN_FOOD_COLUMN_DATA } from '../food-constants';
import { GenericCrudComponent } from '@app/appComponents/_generic/generic-parent/generic-crud/generic-crud.component';
import { FoodService } from '@app/appModules/controller/services/food.service';
import { FormGroup } from '@angular/forms';
import { buildFormGroupFromContainers } from '@app/appComponents/utils/dataUtils/formDataUtil';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import axios from 'axios';
import { initFormFoodEvents } from '@app/appModules/utils/moduleUtils/FoodRegisterUtil';

@Component({
  selector: 'app-food-add-edit',
  templateUrl: './food-add-edit.component.html'
})
export class FoodAddEditComponent extends GenericCrudComponent {

  @Input() idFood?: number;

  public formData = ADMIN_FOOD_COLUMN_DATA;
  public formGroup: FormGroup;

  constructor(injector: Injector, private foodService: FoodService) {
    super(injector);

    this.formGroup = buildFormGroupFromContainers([this.formData]);
    this.formGroup.addControl("id", this.formBuilder.control(null));

    initFormFoodEvents(this.formGroup);
  }

  ngOnInit(): void {
    if(this.idFood !== undefined)
      this.getFoodService(this.idFood);
  }

  onSubmit() {

    let debugClass = generateDebugClassModule("add/edit food module");
    debug(debugClass, "start");

    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid)
      return;

    this.spinner.show();
    axios.all([this.foodService.addEditFoodService(this.formGroup.value)])
      .then(axios.spread((foodAddEditData) => {

        debug(debugClass, "result", foodAddEditData);
        this.toastPrimeInstance.showSuccess("FOOD " + (this.idFood === undefined ? "REGISTER" : "EDIT"), "Food " + (this.idFood === undefined ? "registered" : "edited"));

        if(this.executeOnSubmitFunction)
          this.executeOnSubmitFunction();

        this.spinner.hide();

      }))
      .catch((error) => {
        this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
      });
  }

  getFoodService(idFood: number) {

    let debugClass = generateDebugClassModule("init get food data module");
    debug(debugClass, "start");

    this.spinner.show();
    axios.all([this.foodService.getFoodService(idFood)])
      .then(axios.spread((foodData) => {

        debug(debugClass, "result", foodData);
        if (foodData.data.food !== null) {
          this.formGroup.patchValue(foodData.data.food);
        }

        this.spinner.hide();

      }))
      .catch((error) => {
        this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
      });
  }

}

export default FoodAddEditComponent;
