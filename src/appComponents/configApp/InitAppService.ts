import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ILayout } from "@app/appComponents/@types/controller/reducers/ilayout";
import { setMenu } from "@app/appComponents/controller/actions/layout.actions";
import { HttpInstance } from "@app/appComponents/instances/webInstances/httpIntance";
import { _APP_API_MOCK_IS_LOAD_ } from "@app/appComponents/catalogs/constantCatalog";

@Injectable({
    providedIn: 'root',
  })
  export class InitAppService {

    constructor(private store: Store<{ layout: ILayout }>, private httpUtil: HttpInstance) {
      }

      init(navItems: any, mockConfigList?: any) {
        this.store.dispatch(setMenu({ menu: navItems }));

        if(mockConfigList && _APP_API_MOCK_IS_LOAD_)
          this.httpUtil.initConfigMocks(mockConfigList);
      }

  }
