import '@angular/compiler';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './_moduleTest/app/appTest.module';
import { AppMainModule as AppModule } from './appModules/app/appMain.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));