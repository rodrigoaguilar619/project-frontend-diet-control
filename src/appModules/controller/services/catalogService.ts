import { Injectable } from "@angular/core";
import { HttpMethodEnum } from "@app/appComponents/catalogs/enumCatalog";
import { HttpManagerInstance } from "@app/appComponents/instances/webInstances/httpManagerInstance";
import { generateDebugClassService } from "@app/appComponents/utils/webUtils/debugUtil";
import { API_CATALOG_GET_ALL, API_CATALOG_RECIPE_GET } from "@app/appModules/catalogs/uriCatalog";

 @Injectable({
    providedIn: 'root'
})
export class CatalogService {

    constructor(private httpManagerInstance: HttpManagerInstance) {
    }

    getCatalogService(catalogName: any) {

        let debugClass = generateDebugClassService("Get Catalog list");

        let params = { catalogName: catalogName };
        let url = API_CATALOG_GET_ALL;

        return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
      }

      getCatalogRecipeService() {

        let debugClass = generateDebugClassService("Get Catalog recipe");

        let params = {};
        let url = API_CATALOG_RECIPE_GET;

        return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
      }

}