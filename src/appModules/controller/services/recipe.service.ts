import { Injectable, Injector } from '@angular/core';
import { HttpMethodEnum } from '@app/appComponents/catalogs/enumCatalog';
import { HttpManagerInstance } from '@app/appComponents/instances/webInstances/httpManagerInstance';
import { generateDebugClassService } from '@app/appComponents/utils/webUtils/debugUtil';
import { API_RECIPE_ADD, API_RECIPE_DELETE, API_RECIPE_EDIT, API_RECIPE_GET, API_RECIPE_LIST_GET } from '@app/appModules/catalogs/uriCatalog';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpManagerInstance: HttpManagerInstance) {
  }

  getRecipeListService() {

    let debugClass = generateDebugClassService("Get Recipe List");

    let params = {};
    let url = API_RECIPE_LIST_GET;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }

  getRecipeService(idRecipe: number) {

    let debugClass = generateDebugClassService("Get Recipe Data");

    let params = { id: idRecipe };
    let url = API_RECIPE_GET;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }

  addEditRecipeService(data: any) {

    let debugClass = generateDebugClassService("Add Edit Recipe id: " + (data.id ? data.id : "NEW"));

    let params = { recipe: data };
    let url = data.id ? API_RECIPE_EDIT : API_RECIPE_ADD;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }

  deleteRecipeService(idRecipe: number) {

    let debugClass = generateDebugClassService("Delete Recipe");

    let params = { id: idRecipe };
    let url = API_RECIPE_DELETE;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }
}