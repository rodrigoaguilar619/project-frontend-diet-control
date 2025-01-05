import { Component, Injector } from '@angular/core';
import axios from 'axios';
import { GenericParentComponent } from '@app/appComponents/components/_generic/generic-parent/generic-parent.component';
import { AdminService } from '@app/appModules/controller/services/admin.service';
import { ADMIN_NUTRITIONAL_GOALS_COLUMNS } from '@app/appModules/app/admin/admin.constants';
import { PATH_API_DOCUMENTATION } from '@app/appModules/catalogs/uriCatalog';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import { setTitle } from '@app/appComponents/controller/actions/layout.actions';
import ModalClass from '@app/appComponents/classes/modalClass';
import { ModalTypeEnum } from '@app/appComponents/catalogs/enumCatalog';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import { commonAppComponents } from '@app/appComponents/components/commonComponents.config';
import { NutritionalRegisterComponent } from '@app/appModules/app/admin/nutritional-register/nutritional-register.component';

export enum ModulePrincipalDataEnum {
  NUTRITIONAL_GOALS_REGISTER = 'NUTRITIONAL_GOALS_REGISTER',
}

@Component({
  imports: [commonAppModules, commonAppComponents, NutritionalRegisterComponent],
  selector: 'app-principal-data',
  templateUrl: './principal-data.component.html'
})
export class PrincipalDataComponent extends GenericParentComponent {

  public nutritionalGoalsColumns = ADMIN_NUTRITIONAL_GOALS_COLUMNS;
  public nutritionalGoalsValues: any = [];
  public pathApiDocumentation = PATH_API_DOCUMENTATION;
  public dataTableSectionsProperties = { header: true, footer: false, search: false, pagination: false }
  public modalClass: ModalClass = new ModalClass(false, ModalTypeEnum.POPUP);
  public moduleEnum = ModulePrincipalDataEnum;

  constructor(injector: Injector, private adminService: AdminService) {
    super(injector);

    this.store.dispatch(setTitle({ title: "Module principal page" }));
  }

  ngOnInit(): void {
    this.getNutritionalGoalModule();
  }

  closeModal() {
    this.modalClass.setIsShowPopUp(false);
  }

  getNutritionalGoalModule() {

    let debugClass = generateDebugClassModule("init principal module");
    debug(debugClass, "start");

    this.spinner.show();
    axios.all([this.adminService.getNutritionalGoalService()])
        .then(axios.spread((nutritionalGoalData) => {

            debug(debugClass, "result", nutritionalGoalData);
            this.nutritionalGoalsValues = [nutritionalGoalData.data.nutritionGoal];
            this.spinner.hide();

        }))
        .catch((error) => {
            this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
        });
  }

  openModalRegisterNutritionalGoal() {
    this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
    this.modalClass.setDataModal(this.moduleEnum.NUTRITIONAL_GOALS_REGISTER, "REGISTER NUTRITIONAL GOAL", this.closeModal.bind(this));
  }

  executeAfterSubmit() {
    this.getNutritionalGoalModule();
    this.modalClass.setIsShowPopUp(false);
  }

}
