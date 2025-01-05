import axios from 'axios';
import { Component, Injector } from '@angular/core';
import { GenericParentComponent } from '@app/appComponents/components/_generic/generic-parent/generic-parent.component';
import { AuthService } from '@app/appComponents/controller/services/auth.service';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutLayoutComponent extends GenericParentComponent {

  constructor(injector: Injector, private authService: AuthService) {
    super(injector);
    this.initLogout();
  }

  onInit(): void {
    this.initLogout();
  }

  initLogout() {

    let debugClass = generateDebugClassModule("init logout");
    debug(debugClass, "start");

    this.spinner.show();
    axios.all([this.authService.logoutService()])
        .then(axios.spread((logoutData) => {

            debug(debugClass, "result", logoutData);

            localStorage.removeItem('userName');
            localStorage.removeItem('token');;

        }))
        .finally(() => {
            this.spinner.hide();
            this.httpManagerInstance.redirectLogout();
        });
    }
}
