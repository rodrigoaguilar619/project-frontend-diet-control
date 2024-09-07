import { Component, Injector } from '@angular/core';
import { IButtonOptions } from '@app/appComponents/@types/components/buttons/buttons';
import { GenericParentComponent } from '@app/appComponents/_generic/generic-parent/generic-parent.component';
import { ModalTypeEnum } from '@app/appComponents/catalogs/enumCatalog';
import ModalClass from '@app/appComponents/classes/modalClass';
import { setTitle } from '@app/appComponents/controller/actions/layout.actions';
import { RoutingInstance } from '@app/appComponents/instances/webInstances/routingIntance';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import { SUB_PATHS } from '@app/appModules/catalogs/pathsCatalog';
import { DietService } from '@app/appModules/controller/services/dietService';
import axios from 'axios';
import { DIET_CUSTOM_FOOD_COLUMNS, DIET_FOOD_COLUMNS_IDS } from '../../diet.contants';

enum ModuleDietCustomDataEnum {
  MODAL_ADD_EDIT_DIET_CUSTOM = "add_edit_diet_custom",
  MODAL_RESUME_DIET_CUSTOM = "modal_resume_diet_custom",
  MODAL_DELETE_DIET_CUSTOM = "modal_delete_diet_custom",
}

@Component({
  selector: 'app-diet-custom-list',
  templateUrl: './diet-custom-list.component.html'
})
export class DietCustomListComponent extends GenericParentComponent {

  public foodListValues: any = [];
  public foodListColumns = DIET_CUSTOM_FOOD_COLUMNS;
  public dietsCustomDetailListValues: any = [];
  public moduleEnum = ModuleDietCustomDataEnum;
  public modalClass: ModalClass = new ModalClass(false, ModalTypeEnum.POPUP);
  public idDietCustomEdit:any = null;

  public buttonsOptions: IButtonOptions[] = [
    {
      label: "",
      function: this.openModalEditDietCustom.bind(this),
      icon: "far fa-edit",
      title: "Edit diet custom"
    },
    {
      label: "",
      function: this.openModalResumeDietCustom.bind(this),
      icon: "far fa-file",
      title: "Resume diet custom"
    },
    {
      label: "",
      function: this.redirectResumeDietCustom.bind(this),
      icon: "fas fa-file",
      title: "Detail diet custom"
    },
    {
      label: "",
      function: this.downloadDietReportService.bind(this),
      icon: "fa fa-download",
      title: "download diet report"
    },{
      label: "",
      function: this.openModalDeleteDietCustom.bind(this),
      icon: "far fa-trash-alt",
      title: "Delete diet custom"
    },]

  constructor(injector: Injector, private dietService: DietService, private routingInstance: RoutingInstance) {
    super(injector);

    this.store.dispatch(setTitle({ title: "Module diet custom list" }));

  }

  ngOnInit(): void {
    this.initDietCustomServices();
  }

  closeModal() {
    this.modalClass.setIsShowPopUp(false);
  }

  openModalDeleteDietCustom(rowData: any) {
    this.modalClass.setConfig(true, ModalTypeEnum.CONFIRMATION, "md");
    this.modalClass.setDataModal(this.moduleEnum.MODAL_DELETE_DIET_CUSTOM, "DELETE DIET CUSTOM: " + rowData.recipeTitle, this.closeModal.bind(this));
    this.modalClass.setContentText("Do you want to remove diet custom id: " + rowData.id + " and description: " + rowData.recipeTitle + "?");
    this.modalClass.setExecuteFunction(this.deleteDietCustom.bind(this, rowData.id));
  }

  openModalEditDietCustom(rowData: any) {
    this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
    this.modalClass.setDataModal(this.moduleEnum.MODAL_ADD_EDIT_DIET_CUSTOM, "EDIT DIET CUSTOM ID: " + rowData.id, this.closeModal.bind(this));
    this.idDietCustomEdit = rowData.id;
  }

  openModalAddDietCustom() {
    this.idDietCustomEdit = null;
    this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
    this.modalClass.setDataModal(this.moduleEnum.MODAL_ADD_EDIT_DIET_CUSTOM, "ADD DIET CUSTOM", this.closeModal.bind(this));
  }

  openModalResumeDietCustom(rowData: any) {
    this.idDietCustomEdit = null;
    this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
    this.modalClass.setDataModal(this.moduleEnum.MODAL_RESUME_DIET_CUSTOM, "RESUME DIET CUSTOM: " + rowData.recipeTitle, this.closeModal.bind(this));
    this.idDietCustomEdit = rowData.id;
  }

  redirectResumeDietCustom(rowData: any) {
    this.routingInstance.openUrlNewWindow(SUB_PATHS.DIET.DIET_CUSTOM_DETAILS.fullPath, { idDietCustom: rowData.id, recipeTitle: rowData.recipeTitle });
  }

  deleteDietCustom(id: number) {
    this.deleteDietCustomService(id).then(() => {
      return this.getDietCustomListService();
    })
    .then(() => {
      this.closeModal();
    });
  }

  setEmptyRows(subArrayList: any, rowsToAdd: number) {

    return [...subArrayList, ...Array(rowsToAdd).fill({ rowCssProperties: { color: "white" }, [DIET_FOOD_COLUMNS_IDS.DESCRIPTION]: "--" })];
  }

  normalizeArrayList(arrayList: any) {

    for (let i = 0; i < (arrayList.length-1); i = i+2) {

      if(i >= arrayList.length)
        continue;

      let dataLeft = arrayList[i].foods;
      let dataRight = arrayList[i+1].foods;

      if (dataLeft.length > dataRight.length)
        arrayList[i+1].foods = this.setEmptyRows(arrayList[i+1].foods, (dataLeft.length - dataRight.length));
      else if(dataRight.length > dataLeft.length)
        arrayList[i].foods = this.setEmptyRows(arrayList[i].foods, (dataRight.length - dataLeft.length));
    }

    return arrayList;
}

  initDietCustomServices() {

    let debugClass = generateDebugClassModule("init get diet custom services");

    this.spinner.show();
    Promise.all([this.getDietCustomListService(), this.getDietsCustomDetailService()])
    .then(() => {
      this.spinner.hide();
    })
    .catch((error) => {
      this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
    });
  }

  getDietCustomListService(): Promise<any> {

    let debugClass = generateDebugClassModule("init get diet custom module");
    debug(debugClass, "start");

    return axios.all([this.dietService.getDietCustomListService()])
        .then(axios.spread((dietCustomData) => {

            debug(debugClass, "result", dietCustomData);
            this.foodListValues = dietCustomData.data.diets;

        }))
        .catch((error) => {
            this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
        });
  }

  getDietsCustomDetailService() {

    let debugClass = generateDebugClassModule("init get diets custom details module");
    debug(debugClass, "start");

    return axios.all([this.dietService.getDietCustomDetailListService()])
        .then(axios.spread((dietCustomDetailData) => {

            debug(debugClass, "result", dietCustomDetailData);
            this.dietsCustomDetailListValues = this.normalizeArrayList(dietCustomDetailData.data.dietCustomDetailList);

            this.dietsCustomDetailListValues.map((diet: any) => {

              diet.foods.map((food: any) => {

                let descriptionMaxsize = 22;
                let description = food[DIET_FOOD_COLUMNS_IDS.DESCRIPTION];

                if (description.length > descriptionMaxsize)
                  description = description.substring(0, descriptionMaxsize);

                food[DIET_FOOD_COLUMNS_IDS.DESCRIPTION] = description + "...";
              });
            });
        }))
        .catch((error) => {
            this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
        });
  }

  deleteDietCustomService(idDietCustom: number): Promise<void|null> {

    let debugClass = generateDebugClassModule("init delete diet custom module");
    debug(debugClass, "start");

    return axios.all([this.dietService.deleteDietCustomService(idDietCustom)])
        .then(axios.spread((dietCustomData) => {

            debug(debugClass, "result", dietCustomData);
            this.foodListValues = dietCustomData.data.diets;

        }))
        .catch((error) => {
            this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
        });
  }

  downloadDietReportService(rowData: any) {
    this.dietService.downloadDietReportService(rowData.id, this.componentType);
  }

  executeAfterSubmit() {
    this.initDietCustomServices();
    this.modalClass.setIsShowPopUp(false);
  }

}

export default DietCustomListComponent;
