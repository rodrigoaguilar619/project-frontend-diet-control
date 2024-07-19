import { Injectable } from '@angular/core';
import { _APP_SECURITY_ENABLED_ } from '../../catalogs/constantCatalog';
import { ComponentTypeEnum, HttpMethodEnum } from '../../catalogs/enumCatalog';
import DebugClass from '../../classes/debugClass';
import { debug, debugError } from '../../utils/webUtils/debugUtil';
import { HttpStatusCode } from 'axios';
import { ToastPrimeInstance } from '../messages/toastPrimeInstance';
import { HttpInstance } from './httpIntance';

@Injectable({
  providedIn: 'root'
})
export class HttpManagerInstance {

  private axiosInstance: any;

  constructor(private httpUtil: HttpInstance, private toastPrimeInstance: ToastPrimeInstance) {
    this.axiosInstance = this.httpUtil.getAxiosInstance();
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
  manageCallApiAuthPromise(debugClass: DebugClass, url: string, params: Record<string, any>, config: Record<string, any>, httpMethod: HttpMethodEnum) {

    debug(debugClass, "start", { url: url, params });

    const axiosMethod = httpMethod === HttpMethodEnum.POST ? this.axiosInstance.post : this.axiosInstance.get;

    return axiosMethod(url, params, config)
      .then(({ data }: any) => {
        return Promise.resolve(data);
      })
      .catch((error: any) => {

        if (!(error instanceof Error)) {
          error = new Error(error);
        }
        
        return Promise.reject(error);
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
                //redirectSessionExpired(dispatch, true);
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
  
  /*export function redirectLogout(dispatch: any, isRedirectLogout: boolean) {
    dispatch(setRedirectLogoutAction(isRedirectLogout));
  }
  
  export function redirectSessionExpired(dispatch: any, isSessionExpired: boolean) {
    dispatch(setSessionExpiredAction(isSessionExpired));
  }
  
  export function setRedirectSessionRestart(dispatch: any) {
    dispatch(setRedirectSessionRestartAction());
  }*/
}
