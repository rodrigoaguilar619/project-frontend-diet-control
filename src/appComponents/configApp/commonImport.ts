import { ActionReducer } from "@ngrx/store";
import { storeLogger } from "ngrx-store-logger";
import { setLayoutReducer } from "@app/appComponents/controller/reducers/layout.reducer";
import { _APP_ENVIRONMENT_ } from "@app/appComponents/catalogs/constantCatalog";

export const libReducers = {
    layout: setLayoutReducer
}

export function logger(reducer: ActionReducer<any>): any {
    return storeLogger()(reducer);
  }

export const metaReducers = _APP_ENVIRONMENT_ === 'development' ? [logger] : [];
