import { CommonModule } from "@angular/common";
import { _APP_ENVIRONMENT_ } from "../catalogs/constantCatalog";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { setLayoutReducer } from "../../appComponents/controller/reducers/layout.reducer";
import { ActionReducer, StoreModule } from "@ngrx/store";
import { storeLogger } from "ngrx-store-logger";
import { ComponentsModule } from "../../appComponents/components/components.module";

export const libReducers = {
    layout: setLayoutReducer
}

export function logger(reducer: ActionReducer<any>): any {
    return storeLogger()(reducer);
  }
  
export const metaReducers = _APP_ENVIRONMENT_ === 'development' ? [logger] : [];