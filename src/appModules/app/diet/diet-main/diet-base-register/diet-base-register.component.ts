import { Component, Injector } from '@angular/core';
import axios from 'axios';
import { DIET_FOOD_TOTALS_RESUME_COLUMNS } from '@app/appModules/app/diet/diet.contants';
import { GenericParentComponent } from '@app/appComponents/components/_generic/generic-parent/generic-parent.component';
import { setSubTitle } from '@app/appComponents/controller/actions/layout.actions';
import { DietService } from '@app/appModules/controller/services/dietService';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import ModalClass from '@app/appComponents/classes/modalClass';
import { ModalTypeEnum } from '@app/appComponents/catalogs/enumCatalog';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import { commonAppComponents } from '@app/appComponents/components/commonComponents.config';
import DietFoodsResumeComponent from '@app/appModules/app/diet/diet-resumes/diet-foods-resume/diet-foods-resume.component';
import DietBaseAddEditComponent from '../../diet-crud/diet-base-add-edit/diet-base-add-edit.component';

enum ModuleDietBaseDataEnum {
  MODAL_REGISTER_DIET_BASE = "register_diet_base"
}

@Component({
  imports: [commonAppModules, commonAppComponents, DietBaseAddEditComponent, DietFoodsResumeComponent],
  selector: 'app-diet-base-register',
  templateUrl: './diet-base-register.component.html'
})
export class DietBaseRegisterComponent extends GenericParentComponent {

  public foodListValues: any = [];
  public foodResumeValues: any = [];
  public foodListColumns = DIET_FOOD_TOTALS_RESUME_COLUMNS;
  public foodResumeColumns = DIET_FOOD_TOTALS_RESUME_COLUMNS;
  public dataTableSectionsProperties = { header: false, footer: false, search: false, pagination: false }
  public moduleEnum = ModuleDietBaseDataEnum;
  public modalClass: ModalClass = new ModalClass(false, ModalTypeEnum.POPUP);

  constructor(injector: Injector, private dietService: DietService) {
    super(injector);
    this.store.dispatch(setSubTitle({ subTitle: "Diet Base" }));
  }

  ngOnInit(): void {
    this.getDietBaseService();
  }

  getDietBaseService() {

    let debugClass = generateDebugClassModule("init get diet base module");
    debug(debugClass, "start");

    this.spinner.show();
    axios.all([this.dietService.getDietBaseService()])
        .then(axios.spread((dietBaseData) => {

            debug(debugClass, "result", dietBaseData);
            this.foodListValues = dietBaseData.data.foods;
            this.foodResumeValues = [{...dietBaseData.data.diet}];
            this.spinner.hide();

        }))
        .catch((error) => {
            this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
        });
  }

  openModalRegisterDietBase() {
    this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
    this.modalClass.setDataModal(this.moduleEnum.MODAL_REGISTER_DIET_BASE, "REGISTER DIET BASE", this.closeModal.bind(this));
  }

  closeModal() {
    this.modalClass.setIsShowPopUp(false);
  }

  executeAfterSubmit() {
    this.getDietBaseService();
    this.modalClass.setIsShowPopUp(false);
  }

}

export default DietBaseRegisterComponent;
