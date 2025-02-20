import { Injectable } from "@angular/core";
import { HttpMethodEnum } from "@app/appComponents/catalogs/enumCatalog";
import { HttpManagerInstance } from "@app/appComponents/instances/webInstances/httpManagerInstance";
import { generateDebugClassService } from "@app/appComponents/utils/webUtils/debugUtil";
import { URL_API_USER_DATA_GET, URL_AUTH_LOGIN, URL_AUTH_LOGOUT, URL_REFRESH_SESSION, URL_VALIDATE_SESSION } from "@app/appComponents/catalogs/uriCatalog";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpManagerInstance: HttpManagerInstance) {
  }

  loginService(username: string, password: string) {

    let debugClass = generateDebugClassService("Login user");

    let params = { userName: username, pwd: password };
    let url = URL_AUTH_LOGIN;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }

  logoutService() {

    let debugClass = generateDebugClassService("Logout user");

    let params = {};
    let url = URL_AUTH_LOGOUT;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }

  verifySessionService() {

    let debugClass = generateDebugClassService("Verify Session");

    let params = {};
    let url = URL_VALIDATE_SESSION;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }

  refreshSessionService() {

    let debugClass = generateDebugClassService("Refresh Session");

    let params = {};
    let url = URL_REFRESH_SESSION;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
  }

  getUserDataService() {

    let debugClass = generateDebugClassService("Get User Data");

    let params = {};
    let url = URL_API_USER_DATA_GET;

    return this.httpManagerInstance.manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}
}
