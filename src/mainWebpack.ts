import '@angular/compiler';
import './scss/environments/coreui/styles.scss';
import './scss/environments/coreui/stylesApp.scss';

import { bootstrapApplication } from '@angular/platform-browser';
import { getLayoutConfig } from './appComponents/templates/environments/coreui/layout.config';
import TemplateComponent from './appComponents/templates/environments/coreui/template/template.component';

/*import AppMainComponent from './_moduleTest/app/appTest.component';
import { appRoutes } from './_moduleTest/app/appTest.routing';*/
import AppMainComponent from './appModules/app/appMain.component';
import { getRoutes } from './appModules/app/appMain.routing';

const template = TemplateComponent;
export const customReducers = {};

bootstrapApplication(AppMainComponent, getLayoutConfig(getRoutes(template), customReducers)).catch((err) => console.error(err));

if (module['hot']) {
  module['hot'].accept();
}
