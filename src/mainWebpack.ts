import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { getLayoutConfig } from './main.config';

//-------- TEMPLATE COREUI CONFIG ----------------
import './scss/environments/coreui/styles.scss';
import './scss/environments/coreui/stylesApp.scss'
import TemplateComponent from './appComponents/templates/environments/coreui/template/template.component';

//-------- TEMPLATE PRIMENG CONFIG ----------------
/*import './scss/environments/primeng/styles.scss';
import './scss/environments/primeng/stylesApp.scss';
import TemplateComponent from './appComponents/templates/environments/primeng/template/template.component';*/

//-------- APP TEST CONFIG ----------------
/*import AppMainComponent from './_moduleTest/app/appTest.component';
import { appRoutes } from './_moduleTest/app/appTest.routing';*/

//-------- APP MAIN CONFIG ----------------
import AppMainComponent from './appModules/app/appMain.component';
import { getRoutes } from './appModules/app/appMain.routing';

const template = TemplateComponent;
export const customReducers = {};

bootstrapApplication(AppMainComponent, getLayoutConfig(getRoutes(template), customReducers)).catch((err) => console.error(err));

if (module['hot']) {
  module['hot'].accept();
}
