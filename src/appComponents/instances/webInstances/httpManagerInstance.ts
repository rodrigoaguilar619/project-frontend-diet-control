import { Injectable } from '@angular/core';
import { HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';
import { _APP_ROUTE_START_, _APP_SECURITY_ENABLED_ } from '@app/appComponents/catalogs/constantCatalog';
import { ComponentTypeEnum, HttpMethodEnum } from '@app/appComponents/catalogs/enumCatalog';
import DebugClass from '@app/appComponents/classes/debugClass';
import { debug, debugError } from '@app/appComponents/utils/webUtils/debugUtil';
import { ToastPrimeInstance } from '@app/appComponents/instances/messages/toastPrimeInstance';
import { HttpInstance } from './httpIntance';

@Injectable({
  providedIn: 'root'
})
export class HttpManagerInstance {

  constructor(private readonly router: Router, private readonly httpUtil: HttpInstance,private readonly toastPrimeInstance: ToastPrimeInstance) {
  }

  normalizeError(error: any) {

      let normalizedError: Error & { response?: any };

      if (error instanceof Error)
          normalizedError = error;
      else
          normalizedError = new Error("Unknown error");

      return normalizedError;
  }

  /**
 * Manages the API call with authentication and returns a Promise.
 *
 * @param {DebugClass} debugClass - the debug class for logging
 * @param {string} url - the URL for the API call
 * @param {Record<string, any>} params - the parameters for the API call
 * @param {Record<string, any>} config - the configuration for the API call
 * @param {HttpMethodEnum} httpMethod - the HTTP method for the API call
 * @return {Promise<any>} a Promise that resolves to the response data or rejects with an error
 */
  manageCallApiAuthPromise(debugClass: DebugClass, url: string, params: Record<string, any>, headers: Record<string, any>, httpMethod: HttpMethodEnum) {

    debug(debugClass, "start", { url: url, params });
    headers['Content-Type'] = 'application/json';

    return this.httpUtil.fetchInstance(url, {method: httpMethod, headers: headers, body: JSON.stringify(params)})
        .then((data) => {

            debug(debugClass, "result fetch", data);
            return Promise.resolve(data);
        })
        .catch((error) => {
            debugError(debugClass, error);
            return Promise.reject(this.normalizeError(error));
        });
}

  /**
  * Manages error handling for the alert module.
  *
  * @param {any} store - The store object for managing state
  * @param {DebugClass} debugClass - The debug class for logging errors
  * @param {any} error - The error object to be managed
  * @return {void}
  */
  manageAlertModuleError(_componentType: ComponentTypeEnum, debugClass: DebugClass, error: any) {
    try {

        let errorMessage = "";
        if (error.response !== undefined) {
            if(error.response.status === HttpStatusCode.UnprocessableEntity) {
                errorMessage = error.response.data.message;
            }
            else if(error.response.status === HttpStatusCode.NotFound) {
                errorMessage = "Error api not found";
            }
            else if(error.response.status === HttpStatusCode.InternalServerError) {
                errorMessage = "Error internal server";
            }
            else if(error.response.status === HttpStatusCode.Unauthorized && _APP_SECURITY_ENABLED_) {
              this.redirectSessionExpired();
            }
            else
                errorMessage = "Error with status: " + error.response.status;
        }
        else if (error.message !== undefined) {
            errorMessage = error.message;
        }
        else
            errorMessage = "Error unhandled";

        debugError(debugClass, "<" + errorMessage + ">", error);
        this.toastPrimeInstance.showError("Error " + (error.response?.status !== undefined ? error.response.status : ""), errorMessage, error);
    }
    catch(errorCatch) {
        debugError(debugClass, "Error manage module", errorCatch);
    }
  }

  redirectMainRoute() {
    this.router.navigate([_APP_ROUTE_START_]);
  }

  redirectLogout() {
    this.router.navigate(['login'], { queryParams: { isLogOut: true } });
  }

  redirectLogin() {
    this.router.navigate(['login']);
  }

  redirectSessionExpired() {
    this.router.navigate(['login'], { queryParams: { isSessionExpiredApp: true } });
  }
}
