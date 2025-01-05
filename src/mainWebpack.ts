import '@angular/compiler';
import './scss/environments/coreui/styles.scss';
import './scss/environments/coreui/stylesApp.scss';

import { bootstrapApplication } from '@angular/platform-browser';
import { getLayoutConfig } from './appComponents/templates/environments/coreui/layout.config';

/*import AppMainComponent from './_moduleTest/app/appTest.component';
import { appRoutes } from './_moduleTest/app/appTest.routing';*/
import AppMainComponent from './appModules/app/appMain.component';
import { appRoutes } from './appModules/app/appMain.routing';

export const customReducers = {};

bootstrapApplication(AppMainComponent, getLayoutConfig(appRoutes, customReducers)).catch((err) => console.error(err));
