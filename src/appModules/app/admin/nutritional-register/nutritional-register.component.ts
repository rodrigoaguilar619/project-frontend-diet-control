import { Component, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import axios from 'axios';
import { GenericCrudComponent } from '@app/appComponents/components/_generic/generic-parent/generic-crud/generic-crud.component';
import { ADMIN_NUTRITIONAL_GOALS_REGISTER_DATA } from '@app/appModules/app/admin/admin.constants';
import { AdminService } from '@app/appModules/controller/services/admin.service';
import { buildFormGroupFromContainers } from '@app/appComponents/utils/dataUtils/formDataUtil';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import { commonAppComponents } from '@app/appComponents/components/commonComponents.config';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';

@Component({
  imports: [commonAppModules, commonAppComponents],
  selector: 'app-nutritional-register',
  templateUrl: './nutritional-register.component.html'
})
export class NutritionalRegisterComponent extends GenericCrudComponent {

  public formData = ADMIN_NUTRITIONAL_GOALS_REGISTER_DATA;
  public formGroup: FormGroup;

  constructor(injector: Injector, private adminService: AdminService) {

    super(injector);
    this.formGroup = buildFormGroupFromContainers([this.formData]);
  }

  ngOnInit(): void {
    this.getNutritionalGoals();
  }

  onSubmit() {

    let debugClass = generateDebugClassModule("register nutritional goals module");
    debug(debugClass, "start");

    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid)
      return;

    this.spinner.show();
    axios.all([this.adminService.registerNutritionalGoalsService(this.formGroup.value)])
      .then(axios.spread((nutritionalGoalData) => {

        debug(debugClass, "result", nutritionalGoalData);
        this.toastPrimeInstance.showSuccess("NUTRITIONAL GOALS", "Nutritional goals registered");

        if(this.executeOnSubmitFunction)
          this.executeOnSubmitFunction();

        this.spinner.hide();

      }))
      .catch((error) => {
        this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
      });
  }

  getNutritionalGoals() {

    let debugClass = generateDebugClassModule("init get nutritional goals module");
    debug(debugClass, "start");

    this.spinner.show();
    axios.all([this.adminService.getNutritionalGoalService()])
      .then(axios.spread((nutritionalGoalData) => {

        debug(debugClass, "result", nutritionalGoalData);
        if (nutritionalGoalData.data.nutritionGoal !== null) {
          this.formGroup.setValue(nutritionalGoalData.data.nutritionGoal);
        }

        this.spinner.hide();

      }))
      .catch((error) => {
        this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
      });
  }

}
