import { NgModule } from '@angular/core';

import { LayoutModule } from '../../appComponents/templates/environments/coreui/layout.module';
import { AppRoutingModule } from './appTest.routing';
import { CommonModule } from '@angular/common';
import { libReducers, metaReducers } from '@app/appComponents/configApp/commonImport';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { _APP_ENVIRONMENT_ } from '../../appComponents/catalogs/constantCatalog';
import { ComponentsModule } from '../../appComponents/components/components.module';
import AppTestComponent from './appTest.component';

export const customReducers = {};

let devModules: any[] = [];

if (_APP_ENVIRONMENT_ === 'development') {
  devModules = [StoreDevtoolsModule.instrument()];
}

@NgModule({
  declarations: [AppTestComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ...devModules,
    StoreModule.forRoot({...libReducers, ...customReducers}, {metaReducers}),
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [
],
  bootstrap: [AppTestComponent]
})

export class AppModule {}
