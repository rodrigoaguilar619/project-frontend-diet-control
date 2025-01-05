import { Component, Injector, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import axios from 'axios';
import { GenericCrudComponent } from '@app/appComponents/components/_generic/generic-parent/generic-crud/generic-crud.component';
import { buildFormGroupFromContainers } from '@app/appComponents/utils/dataUtils/formDataUtil';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import { RecipeService } from '@app/appModules/controller/services/recipe.service';
import { RECIPE_REGISTER_DATA } from '@app/appModules/app/recipe/recipe-contants';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import { commonAppComponents } from '@app/appComponents/components/commonComponents.config';

@Component({
  imports: [commonAppModules, commonAppComponents],
  selector: 'app-recipe-add-edit',
  templateUrl: './recipe-add-edit.component.html'
})
export class RecipeAddEditComponent extends GenericCrudComponent {

  @Input() idRecipe?: number;

  public formData = RECIPE_REGISTER_DATA;
  public formGroup: FormGroup;

  constructor(injector: Injector, private recipeService: RecipeService) {
    super(injector);

    this.formGroup = buildFormGroupFromContainers([this.formData]);
    this.formGroup.addControl("id", this.formBuilder.control(null));
  }

  ngOnInit(): void {
    if(this.idRecipe !== undefined)
      this.getRecipeService(this.idRecipe);
  }

  onSubmit() {

    let debugClass = generateDebugClassModule("add/edit recipe module");
    debug(debugClass, "start");

    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid)
      return;

    this.spinner.show();
    axios.all([this.recipeService.addEditRecipeService(this.formGroup.value)])
      .then(axios.spread((recipeAddEditData) => {

        debug(debugClass, "result", recipeAddEditData);
        this.toastPrimeInstance.showSuccess("RECIPE " + (this.idRecipe === undefined ? "REGISTER" : "EDIT"), "Recipe " + (this.idRecipe === undefined ? "registered" : "edited"));

        if(this.executeOnSubmitFunction)
          this.executeOnSubmitFunction();

        this.spinner.hide();

      }))
      .catch((error) => {
        this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
      });
  }

  getRecipeService(idRecipe: number) {

    let debugClass = generateDebugClassModule("init get recipe data module");
    debug(debugClass, "start");

    this.spinner.show();
    axios.all([this.recipeService.getRecipeService(idRecipe)])
      .then(axios.spread((recipeData) => {

        debug(debugClass, "result", recipeData);
        if (recipeData.data.food !== null) {
          this.formGroup.patchValue(recipeData.data.recipe);
        }

        this.spinner.hide();

      }))
      .catch((error) => {
        this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
      });
  }

}

export default RecipeAddEditComponent;
