import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { _APP_SECURITY_ENABLED_ } from '@app/appComponents/catalogs/constantCatalog';
import { AuthService } from '@app/appComponents/controller/services/auth.service';
import { HttpManagerInstance } from '@app/appComponents/instances/webInstances/httpManagerInstance';
import { generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private httpManagerInstance: HttpManagerInstance) {}

  async canActivate(): Promise<boolean> {

    if (_APP_SECURITY_ENABLED_ === false) return true;

    const isAuthenticated = await this.initVerifySession();

    if (!isAuthenticated) {
      if (localStorage.getItem('token') != undefined) {
        this.httpManagerInstance.redirectSessionExpired();
      } else {
        this.httpManagerInstance.redirectLogin();
      }
      return false;
    }
    return true;
  }

  async initVerifySession(): Promise<boolean> {

    const debugClass = generateDebugClassModule('init verify session on guard');
    console.debug(debugClass, 'start');

    try {
      const verifySessionData = await this.authService.verifySessionService();
      console.debug(debugClass, 'result', verifySessionData);
      return true;

    } catch (error) {
      console.debug(debugClass, 'error', error);
      return false;
    }
  }

}
