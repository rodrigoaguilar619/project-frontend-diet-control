import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { MessageService } from 'primeng/api';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { providePrimeNG } from 'primeng/config';
import Nora from '@primeng/themes/lara';
import { libReducers, metaReducers } from '@app/appComponents/configApp/commonImport';
import { _APP_ENVIRONMENT_ } from '@app/appComponents/catalogs/constantCatalog';
import { SidebarNavHelper } from '@coreui/angular';

const pluginServices = [MessageService];

export function getLayoutConfig(appRoutes: Routes, customReducers: any): ApplicationConfig {
  return {
    providers: [
      ...pluginServices,
      provideRouter(appRoutes, withHashLocation()),
      importProvidersFrom(TableModule, SidebarNavHelper),
      provideStore({...libReducers, ...customReducers}, {metaReducers}),
      providePrimeNG({
        theme: { preset: Nora },
      }),
      ...(_APP_ENVIRONMENT_ === 'development' ? [provideStoreDevtools()] : []),
      provideAnimations()
    ],
  };
}
