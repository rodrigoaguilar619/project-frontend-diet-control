import { Component, Injector } from '@angular/core';
import axios from 'axios';
import { IButtonOptions } from '@app/appComponents/@types/components/buttons/buttons';
import { GenericParentComponent } from '@app/appComponents/components/_generic/generic-parent/generic-parent.component';
import { ADMIN_RECIPE_COLUMN } from '@app/appModules/app/recipe/recipe-contants';
import ModalClass from '@app/appComponents/classes/modalClass';
import { ModalTypeEnum } from '@app/appComponents/catalogs/enumCatalog';
import { setTitle } from '@app/appComponents/controller/actions/layout.actions';
import { RecipeService } from '@app/appModules/controller/services/recipe.service';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import { commonAppComponents } from '@app/appComponents/components/commonComponents.config';
import RecipeAddEditComponent from '../recipe-add-edit/recipe-add-edit.component';

enum ModuleRecipeListEnum {
  RECIPE_EDIT = "recipe_edit",
  RECIPE_ADD = "recipe_add",
  RECIPE_DELETE = "recipe_delete"
}

@Component({
  imports: [commonAppModules, commonAppComponents, RecipeAddEditComponent],
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent extends GenericParentComponent {

  public recipeListColumns = ADMIN_RECIPE_COLUMN;
  public recipeListValues: any = [];
  public modalClass: ModalClass = new ModalClass(false, ModalTypeEnum.POPUP);
  public moduleEnum = ModuleRecipeListEnum;
  public idRecipeEdit?: number;

  public buttonsOptions: IButtonOptions[] = [
    {
      label: "",
      function: this.openModalEditRecipe.bind(this),
      icon: "far fa-edit",
      title: "Edit recipe"
    },
    {
      label: "",
      function: this.openModalDeleteRecipe.bind(this),
      icon: "far fa-trash-alt",
      title: "Delete recipe"
    }]

  constructor(injector: Injector, private recipeService: RecipeService) {
    super(injector);

    this.store.dispatch(setTitle({ title: "Module recipe list" }));
  }

  ngOnInit(): void {

    this.getRecipeListService();
  }

  closeModal() {
    this.modalClass.setIsShowPopUp(false);
  }

  getRecipeListService() {

    let debugClass = generateDebugClassModule("init recipe list module");
    debug(debugClass, "start");

    this.spinner.show();
    axios.all([this.recipeService.getRecipeListService()])
        .then(axios.spread((recipeListData) => {

            debug(debugClass, "result", recipeListData);
            this.recipeListValues = recipeListData.data.recipes;
            this.spinner.hide();

        }))
        .catch((error) => {
            this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
        });
  }

  openModalDeleteRecipe(rowData: any) {
    this.modalClass.setConfig(true, ModalTypeEnum.CONFIRMATION, "md");
    this.modalClass.setDataModal(this.moduleEnum.RECIPE_DELETE, "DELETE RECIPE: " + rowData.title, this.closeModal.bind(this));
    this.modalClass.setContentText("Do you want to remove recipe id: " + rowData.id + " and title: " + rowData.title + "?");
    this.modalClass.setExecuteFunction(this.deleteRecipe.bind(this, rowData.id));
  }

  openModalEditRecipe(rowData: any) {
    this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
    this.modalClass.setDataModal(this.moduleEnum.RECIPE_EDIT, "EDIT RECIPE ID: " + rowData.id + " TITLE: " + rowData.title, this.closeModal.bind(this));
    this.idRecipeEdit = rowData.id;
  }

  openModalAddRecipe() {
    this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
    this.modalClass.setDataModal(this.moduleEnum.RECIPE_ADD, "REGISTER RECIPE", this.closeModal.bind(this));
  }

  deleteRecipe(idRecipe: number) {

    this.deleteRecipeService(idRecipe).then(() => {
      this.getRecipeListService();
    })
    .then(() => {
      this.closeModal();
    });
  }

  deleteRecipeService(idRecipe: number): Promise<void | null> {

    let debugClass = generateDebugClassModule("init delete recipe module");
    debug(debugClass, "start");

    this.spinner.show();
    return axios.all([this.recipeService.deleteRecipeService(idRecipe)])
        .then(axios.spread((recipeDeleteData) => {

            debug(debugClass, "result", recipeDeleteData);
            this.toastPrimeInstance.showSuccess("RECIPE DELETED", "RECIPE DELETED: " + idRecipe);
            this.spinner.hide();

        }))
        .catch((error) => {
            this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
        });
  }

  executeAfterSubmit() {
    this.getRecipeListService();
      this.modalClass.setIsShowPopUp(false);
  }

}

export default RecipeListComponent;
