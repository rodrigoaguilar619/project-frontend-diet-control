import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, SpinnerModule } from '@coreui/angular';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';
import { HttpStatusCode } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconModule, IconSetService, IconDirective } from '@coreui/icons-angular';
import { cilLockLocked, cilUser } from '@coreui/icons';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpManagerInstance } from '@app/appComponents/instances/webInstances/httpManagerInstance';
import { _APP_LOGIN_TITLE_, _APP_ROUTE_START_ } from '@app/appComponents/catalogs/constantCatalog';
import { ComponentLoginMessageTypeEnum } from '@app/appComponents/catalogs/enumCatalog';
import DebugClass from '@app/appComponents/classes/debugClass';
import { debug, debugError, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import { AuthService } from '@app/appComponents/controller/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle,
    CommonModule, SpinnerModule, NgbAlertModule, ReactiveFormsModule, IconModule],
  providers: [IconSetService]
})
export class LoginComponent implements OnInit {


  public loginTitle = _APP_LOGIN_TITLE_;

  isShowMessage: boolean = true;
  isLogOut: string | null = null;
  isSessionExpiredApp: string | null = null;

  @Input() loginForm: FormGroup;
  @Input() currentMessage?: string;
  @Input() messageType?: ComponentLoginMessageTypeEnum;
  @Input() isLoading: boolean = false;
  @Input() loadingText: string = 'Loading...';

  constructor(private authService: AuthService, private httpManagerInstance: HttpManagerInstance, public iconSet: IconSetService, private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute, private zone: NgZone) {
    iconSet.icons = { cilUser, cilLockLocked };

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.isLogOut = params['isLogOut'];
      this.isSessionExpiredApp = params['isSessionExpiredApp'];
    });

    if ( (this.isLogOut == "false" || this.isLogOut == null) && localStorage.getItem('userName') != undefined && localStorage.getItem('token') != undefined)
      this.initVerifySession();

    if (this.isSessionExpiredApp == "true")
      this.messageType = ComponentLoginMessageTypeEnum.SESSION_EXPIRED;
    else if (this.isLogOut == "true")
      this.messageType = ComponentLoginMessageTypeEnum.LOGOUT;
  }

  renderMessage() {

    let message = '';
    let severity: 'danger' | 'success' | 'warning' = 'danger';

    switch (this.messageType) {
      case ComponentLoginMessageTypeEnum.ERROR:
        message = this.currentMessage ?? '';
        break;
      case ComponentLoginMessageTypeEnum.LOGOUT:
        severity = 'success';
        message = 'Logout success';
        break;
      case ComponentLoginMessageTypeEnum.SESSION_EXPIRED:
      case ComponentLoginMessageTypeEnum.SESSION_EXPIRED_APP:
        severity = 'warning';
        message = 'Session expired';
        break;
    }

    return { severity, message };
  }

  async pauseExecution(seconds: number) {
    await new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

  initVerifySession() {

    let debugClass = generateDebugClassModule("init verify session");
    debug(debugClass, "start");

    this.isLoading = true;
    this.loadingText = "Verifying session...";
    axios.all([this.authService.verifySessionService()])
      .then(axios.spread((verifySessionData) => {

        debug(debugClass, "result", verifySessionData);
        this.httpManagerInstance.redirectMainRoute();

      }))
      .catch((error) => {
        this.manageSessionExpired(debugClass, error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  async executeSubmitLogin() {

    let debugClass = generateDebugClassModule("init submit login");
    debug(debugClass, "start");

    this.isLoading = true;
    this.loadingText = "Logging in...";
    await this.pauseExecution(1);
    axios.all([this.authService.loginService(this.loginForm.value.username, this.loginForm.value.password)])
      .then(axios.spread((loginData) => {

        debug(debugClass, "result", loginData);
        this.isShowMessage = false;
        localStorage.setItem('userName', loginData.data.userName);
        localStorage.setItem('token', loginData.data.token);
        this.router.navigate([_APP_ROUTE_START_]);

      }))
      .catch((error) => {
        this.manageLoginError(debugClass, error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  manageLoginError(debugClass: DebugClass, error: any) {

    let errorMessage = "";

    if (error.response !== undefined) {

      if (error.response.status === HttpStatusCode.UnprocessableEntity) {
        errorMessage = error.response.data.message;
      }
      else
        errorMessage = "Error with status: " + error.response.status;
    }

    this.zone.run(() => {
      this.messageType = ComponentLoginMessageTypeEnum.ERROR;
      this.currentMessage = errorMessage;
      this.isLoading = false;
    });

    debugError(debugClass, "<" + errorMessage + ">", error);
  }

  manageSessionExpired(debugClass: DebugClass, error: any) {

    let errorMessage = "";

    if (error.response !== undefined) {

      if (error.response.status === HttpStatusCode.Unauthorized) {
        this.messageType = ComponentLoginMessageTypeEnum.SESSION_EXPIRED;

        localStorage.removeItem('userName');
        localStorage.removeItem('token');
      }
      else {
        this.messageType = ComponentLoginMessageTypeEnum.ERROR;
        this.currentMessage = errorMessage;
        errorMessage = "Error with status: " + error.response.status;
      }
    }

    debugError(debugClass, "<" + errorMessage + ">", error);
  }

}
