import '@angular/compiler';
import './scss/environments/coreui/styles.scss';
import './scss/environments/coreui/stylesApp.scss';

import { bootstrapApplication } from '@angular/platform-browser';
import AppMainComponent from './_moduleTest/app/appTest.component';

import { appRoutes } from './_moduleTest/app/appTest.routing';
import { getLayoutConfig } from './appComponents/templates/environments/coreui/layout.config';

export const customReducers = {};

bootstrapApplication(AppMainComponent, getLayoutConfig(appRoutes, customReducers)).catch((err) => console.error(err));
