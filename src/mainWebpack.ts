import '@angular/compiler';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './scss/environments/coreui/styles.scss';
import './scss/environments/coreui/stylesApp.scss';

//import { AppModule as AppMainModule } from './_moduleTest/app/appTest.module';
import { AppMainModule } from './appModules/app/appMain.module';


platformBrowserDynamic().bootstrapModule(AppMainModule)
  .catch(err => console.error(err));
