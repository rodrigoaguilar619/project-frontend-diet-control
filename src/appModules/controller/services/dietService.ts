import { Injectable, Injector } from "@angular/core";
import { API_DIET_BASE_GET, API_DIET_BASE_REGISTER, API_DIET_CUSTOM_ADD, API_DIET_CUSTOM_DELETE, API_DIET_CUSTOM_EDIT, 
  API_DIET_CUSTOM_GET, API_DIET_CUSTOM_GET_LIST, API_DIET_CUSTOM_LIST_GET, API_DIET_CUSTOM_DETAIL_LIST_GET, API_DIET_REPORT_FILE } from "../../../appModules/catalogs/uriCatalog";
import { HttpManagerInstance } from "@app/appComponents/instances/webInstances/httpManagerInstance";
import { ComponentTypeEnum, HttpMethodEnum } from "@app/appComponents/catalogs/enumCatalog";
import { debug, generateDebugClassModule, generateDebugClassService } from "@app/appComponents/utils/webUtils/debugUtil";
import axios from "axios";
import { downloadFileFromBase64 } from "@app/appComponents/utils/dataUtils/fileUtil";

 @Injectable({
    providedIn: 'root'
})
export class DietService {

  constructor(private httpManagerInstance: HttpManagerInstance) {
  }

    getDietBaseService() {

        let debugClass = generateDebugClassService("Get Nutritional Goal");

        let params = { };
        let url = API_DIET_BASE_GET;

        return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
    }

    registerDietBaseService(idRecipe: number, foodList: Record<string, any>[]) {

        let debugClass = generateDebugClassService("Register Diet Base");

        let params = { diet: { idRecipe: idRecipe, foods: foodList } };
        let url = API_DIET_BASE_REGISTER;

        return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
    }

    addEditDietCustomService(isNew: boolean, idRecipe: number, foodList: Record<string, any>[]) {

        let debugClass = generateDebugClassService("Add/Edit Diet Custom id: " + (!isNew ? idRecipe : "NEW"));

        let params = { diet: { idRecipe: idRecipe, foods: foodList } };
        let url = !isNew ? API_DIET_CUSTOM_EDIT : API_DIET_CUSTOM_ADD;

        return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
    }

    getDietCustomListService() {

      let debugClass = generateDebugClassService("Get Diet Custom List");

      let params = { };
      let url = API_DIET_CUSTOM_LIST_GET;

      return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
    }

    getDietCustomDetailListService() {

      let debugClass = generateDebugClassService("Get Diets Custom Details List");

      let params = { };
      let url = API_DIET_CUSTOM_DETAIL_LIST_GET;

      return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
    }

    getDietCustomService(idDietCustom: number) {

      let debugClass = generateDebugClassService("Get Diets Custom Data");

      let params = { id: idDietCustom };
      let url = API_DIET_CUSTOM_GET;

      return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
    }

    deleteDietCustomService(idDietCustom: number) {

      let debugClass = generateDebugClassService("Get Diets Custom Data");

      let params = { id: idDietCustom };
      let url = API_DIET_CUSTOM_DELETE;

      return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
    }

    getReportDietService(idDietCustom: number) {

      let debugClass = generateDebugClassService("Get Report Diet custom");

      let params = { id: idDietCustom };
      let url = API_DIET_REPORT_FILE;

      return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
      
    }

    downloadDietReportService(id: number, componentType: ComponentTypeEnum) {

      let debugClass = generateDebugClassModule("init download diet custom report module");
      debug(debugClass, "start");
  
      return axios.all([this.getReportDietService(id)])
          .then(axios.spread((dietCustomReportData) => {
  
              debug(debugClass, "result", dietCustomReportData);
              downloadFileFromBase64(dietCustomReportData.data.file.fileBase64, "diet_report_" + id, "pdf");
              return;
  
          }))
          .catch((error) => {
              this.httpManagerInstance.manageAlertModuleError(componentType, debugClass, error);
          });
    }
}