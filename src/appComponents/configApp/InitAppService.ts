import { Injectable } from "@angular/core";
import { ILayout } from "../../appComponents/@types/controller/reducers/ilayout";
import { setMenu } from "../../appComponents/controller/actions/layout.actions";
import { HttpInstance } from "../instances/webInstances/httpIntance";
import { Store } from "@ngrx/store";
import { _APP_API_MOCK_IS_LOAD_ } from "../catalogs/constantCatalog";

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