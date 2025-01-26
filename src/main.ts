import '@angular/compiler';

//-------- TEMPLATE COREUI CONFIG ----------------
import './scss/environments/coreui/styles.scss';
import './scss/environments/coreui/stylesApp.scss'
import TemplateComponent from './appComponents/templates/environments/coreui/template/template.component';

import { bootstrapApplication } from '@angular/platform-browser';
import AppMainComponent from './_moduleTest/app/appTest.component';

import { getLayoutConfig } from './main.config';
import { getRoutes } from './_moduleTest/app/appTest.routing';


const template = TemplateComponent;
export const customReducers = {};

bootstrapApplication(AppMainComponent, getLayoutConfig(getRoutes(template), customReducers)).catch((err) => console.error(err));
