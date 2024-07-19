import { Injectable } from '@angular/core';
import { API_FOOD_ADD, API_FOOD_DELETE, API_FOOD_EDIT, API_FOOD_GET, API_FOOD_LIST_GET, API_FOOD_REGISTER_MULTIPLE } from '../../../appModules/catalogs/uriCatalog';
import { HttpManagerInstance } from '@app/appComponents/instances/webInstances/httpManagerInstance';
import { generateDebugClassService } from '@app/appComponents/utils/webUtils/debugUtil';
import { HttpMethodEnum } from '@app/appComponents/catalogs/enumCatalog';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpManagerInstance: HttpManagerInstance) {
  }

  getFoodService(idFood: number) {

    let debugClass = generateDebugClassService("Get Food Data");

    let params = { id: idFood };
    let url = API_FOOD_GET;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }

  getFoodListService() {

    let debugClass = generateDebugClassService("Get Food List");

    let params = {};
    let url = API_FOOD_LIST_GET;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }

  deleteFoodService(idFood: number) {

    let debugClass = generateDebugClassService("Delete Food Data");

    let params = { id: idFood };
    let url = API_FOOD_DELETE;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }

  addEditFoodService(data: any) {

    let debugClass = generateDebugClassService("Add Edit Food id: " + (data.id ? data.id : "NEW"));

    let params = { food: data };
    let url = data.id ? API_FOOD_EDIT : API_FOOD_ADD;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }

  registerFoodsService(data: any) {

    let debugClass = generateDebugClassService("Register Food multiple");

    let params = { foods: data };
    let url = API_FOOD_REGISTER_MULTIPLE;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }
}