import { Injectable } from "@angular/core";
import { API_ADMIN_NUTRITIONAL_GOAL_GET, API_ADMIN_NUTRITIONAL_GOAL_REGISTER } from "@app/appModules/catalogs/uriCatalog";
import { HttpMethodEnum } from "@app/appComponents/catalogs/enumCatalog";
import { HttpManagerInstance } from "@app/appComponents/instances/webInstances/httpManagerInstance";
import { generateDebugClassService } from "@app/appComponents/utils/webUtils/debugUtil";

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private httpManagerInstance: HttpManagerInstance) {
    }

    getNutritionalGoalService() {

        let debugClass = generateDebugClassService("Get Nutritional Goal");

        let params = { };
        let url = API_ADMIN_NUTRITIONAL_GOAL_GET;

        return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
    }

    registerNutritionalGoalsService(nutritionGoal: any) {

        let debugClass = generateDebugClassService("Register Nutritional Goal");

        let params = { nutritionGoal: nutritionGoal };
        let url = API_ADMIN_NUTRITIONAL_GOAL_REGISTER;

        return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
    }
}
