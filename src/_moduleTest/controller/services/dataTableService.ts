import { URL_DATATABLE_EXPAND_LIST_GET, URL_DATATABLE_LIST_GET } from "../../../_moduleTest/catalogs/uriCatalog";
import { HttpMethodEnum } from "../../../appComponents/catalogs/enumCatalog";
import { HttpManagerInstance } from "../../../appComponents/instances/webInstances/httpManagerInstance";
import { Injectable } from "@angular/core";
import { generateDebugClassService } from "../../../appComponents/utils/webUtils/debugUtil";

@Injectable({
    providedIn: 'root'
})
export class DataTableService {

    constructor(private httpManagerInstance: HttpManagerInstance) {
    }

    getDataTableDataService(paramId: number, filterData?: Record<string, any>) {

        let debugClass = generateDebugClassService("Get datatable list");

        let params = { paramId: paramId, filterData: filterData };
        let url = URL_DATATABLE_LIST_GET;

        return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
    }

    getDataTableExpandDataService(paramId: number) {

        let debugClass = generateDebugClassService("Get datatable list");

        let params = { paramId: paramId };
        let url = URL_DATATABLE_EXPAND_LIST_GET;

        return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
    }
}