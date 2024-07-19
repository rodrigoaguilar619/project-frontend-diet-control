import { Component, Injector } from '@angular/core';
import { GenericParentComponent } from '@app/appComponents/_generic/generic-parent/generic-parent.component';
import { FoodService } from '../../../controller/services/food.service';
import { FOOD_LIST_COLUMNS } from '../food-constants';
import ModalClass from '@app/appComponents/classes/modalClass';
import { ModalTypeEnum } from '@app/appComponents/catalogs/enumCatalog';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import axios from 'axios';
import { setTitle } from '@app/appComponents/controller/actions/layout.actions';
import { IButtonOptions } from '@app/appComponents/@types/components/buttons/buttons';

export enum ModulePrincipalDataEnum {
  FOOD_LIST_REGISTER_MULTIPLE = 'FOOD_LIST_REGISTER_MULTIPLE',
  FOOD_EDIT = 'FOOD_EDIT',
  FOOD_DELETE = 'FOOD_DELETE'
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html'
})
export class FoodListComponent extends GenericParentComponent {

  public foodListColumns = FOOD_LIST_COLUMNS;
  public foodListValues: any = [];
  public modalClass: ModalClass = new ModalClass(false, ModalTypeEnum.POPUP);
  public moduleEnum = ModulePrincipalDataEnum;
  public idFoodEdit?: number;

  constructor(injector: Injector, private foodService: FoodService) {
    super(injector);

    this.store.dispatch(setTitle({ title: "Module food list" }));

  }

  public buttonsOptions: IButtonOptions[] = [
    {
      label: "",
      function: this.openModalEditFood.bind(this),
      icon: "far fa-edit",
      title: "Edit food"
    },
    {
      label: "",
      function: this.openModalDeleteFood.bind(this),
      icon: "far fa-trash-alt",
      title: "Delete food"
    }]

  ngOnInit(): void {
    this.getFoodListService();
  }

  closeModal() {
    this.modalClass.setIsShowPopUp(false);
  }

  openModalDeleteFood(rowData: any) {
    this.modalClass.setConfig(true, ModalTypeEnum.CONFIRMATION, "md");
    this.modalClass.setDataModal(this.moduleEnum.FOOD_DELETE, "DELETE FOOD: " + rowData.description, this.closeModal.bind(this));
    this.modalClass.setContentText("Do you want to remove food id: " + rowData.id + " and description: " + rowData.description + "?");
    this.modalClass.setExecuteFunction(this.deleteFood.bind(this, rowData.id));
  }

  openModalEditFood(rowData: any) {
    this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
    this.modalClass.setDataModal(this.moduleEnum.FOOD_EDIT, "EDIT FOOD ID: " + rowData.id + " DESCRIPTION: " + rowData.description, this.closeModal.bind(this));
    this.idFoodEdit = rowData.id;
  }

  openModalRegisterFoods() {
    this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
    this.modalClass.setDataModal(this.moduleEnum.FOOD_LIST_REGISTER_MULTIPLE, "REGISTER FOODS", this.closeModal.bind(this));
  }

  deleteFood(idFood: number) {

    this.deleteFoodModule(idFood).then(() => {
      return this.getFoodListService();
    })
    .then(() => {
      this.closeModal();
    });
  }

  getFoodListService() {

    let debugClass = generateDebugClassModule("init food list module");
    debug(debugClass, "start");

    this.spinner.show();
    axios.all([this.foodService.getFoodListService()])
        .then(axios.spread((foodListData) => {

            debug(debugClass, "result", foodListData);
            this.foodListValues = foodListData.data.foods;
            this.spinner.hide();

        }))
        .catch((error) => {
            this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
        });
  }

  deleteFoodModule(idFood: number): Promise<void | null> {

    let debugClass = generateDebugClassModule("init delete food module");
    debug(debugClass, "start");

    this.spinner.show();
    return axios.all([this.foodService.deleteFoodService(idFood)])
        .then(axios.spread((foodDeleteData) => {

            debug(debugClass, "result", foodDeleteData);
            this.toastPrimeInstance.showSuccess("FOOD DELETED", "FOOD DELETED: " + idFood);
            this.spinner.hide();

        }))
        .catch((error) => {
            this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
        });
  }

    executeAfterSubmit() {
      this.getFoodListService();
      this.modalClass.setIsShowPopUp(false);
    }

}

export default FoodListComponent;