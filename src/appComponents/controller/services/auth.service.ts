import { HttpMethodEnum } from "../../catalogs/enumCatalog";
import { HttpManagerInstance } from "../../instances/webInstances/httpManagerInstance";
import { Injectable } from "@angular/core";
import { generateDebugClassService } from "../../utils/webUtils/debugUtil";
import { URL_AUTH_LOGIN, URL_AUTH_LOGOUT, URL_REFRESH_SESSION, URL_VALIDATE_SESSION } from "@app/appComponents/catalogs/uriCatalog";

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
}
