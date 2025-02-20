import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ILayout } from "@app/appComponents/@types/controller/reducers/ilayout";
import { setMenu, setTitle } from "@app/appComponents/controller/actions/layout.actions";
import { HttpInstance } from "@app/appComponents/instances/webInstances/httpIntance";
import { _APP_API_MOCK_IS_LOAD_, _APP_TITLE_ } from "@app/appComponents/catalogs/constantCatalog";
import { debug, debugError, generateDebugClassModule } from "@app/appComponents/utils/webUtils/debugUtil";
import axios from "axios";
import { AuthService } from "../controller/services/auth.service";
import { IUserData } from "../@types/controller/reducers/iuserData";
import { setUserData } from "../controller/actions/userData.actions";

@Injectable({
    providedIn: 'root',
  })
  export class InitAppService {

    constructor(private store: Store<{ layout: ILayout, userDataState: IUserData }>, private httpUtil: HttpInstance, private authService: AuthService) {
      }

      async init(navItems: any, mockConfigList?: any) {

        if(mockConfigList && _APP_API_MOCK_IS_LOAD_)
          this.httpUtil.initConfigMocks(mockConfigList);

        this.store.dispatch(setTitle({ title: _APP_TITLE_ }));
        this.store.dispatch(setMenu({ menu: navItems }));
        await this.initGetUserData();
      }

      initGetUserData() {

        let debugClass = generateDebugClassModule("init get user data");
        debug(debugClass, "start");

        return axios.all([this.authService.getUserDataService()])
            .then(axios.spread((userData) => {

                debug(debugClass, "result", userData);
                this.store.dispatch(setUserData({ userData: userData.data.userName, userRols: userData.data.userRols }));

            }))
            .catch((error) => {
                debugError(debugClass, "Error getting user data", error);
            });

          }

  }
