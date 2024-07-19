import { NgModule } from '@angular/core';

import { LayoutModule } from '../../appComponents/templates/environments/coreui/layout.module';
import { AppMainRoutingModule } from './appMain.routing';
import { CommonModule } from '@angular/common';
import { _APP_ENVIRONMENT_ } from '@app/appComponents/catalogs/constantCatalog';
import { ComponentsModule } from '@app/appComponents/components/components.module';
import { libReducers, metaReducers } from '@app/appComponents/configApp/commonImport';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import AppMainComponent from './appMain.component';

export const customReducers = {};

let devModules: any[] = [];

if (_APP_ENVIRONMENT_ === 'development') {
  devModules = [StoreDevtoolsModule.instrument()];
}

@NgModule({
  declarations: [AppMainComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ...devModules,
    StoreModule.forRoot({ ...libReducers, ...customReducers }, { metaReducers }),
    AppMainRoutingModule,
    LayoutModule,
  ],
  providers: [
  ],
  bootstrap: [AppMainComponent]
})

export class AppMainModule { }
