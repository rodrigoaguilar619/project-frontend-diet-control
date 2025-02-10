import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  INavData,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarNavHelper,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ILayout } from '@app/appComponents/@types/controller/reducers/ilayout';
import { HeaderLayoutComponent } from '@app/appComponents/templates/environments/coreui/header/header.component';
import { FooterLayoutComponent } from '@app/appComponents/templates/environments/coreui/footer/footer.component';
import { transformNav } from '@app/appComponents/utils/templateUtil/menuCoreuiUtil';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  standalone: true,
  imports: [
    NgxSpinnerComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    RouterLink,
    IconDirective,
    NgScrollbar,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    ShadowOnScrollDirective,
    ContainerComponent,
    RouterOutlet
  ],
  providers: [SidebarNavHelper]
})
export class TemplateComponent {

  minimized = false;
  $layout: Observable<ILayout>;
  layout: ILayout | undefined;
  menu:INavData[] = [];

  imgCoreuiLogoFull = new URL('src/assets/img/brand/coreui-angular.svg', import.meta.url).href;
  imgCoreuiLogoNarrow = new URL('src/assets/img/brand/coreui-signet.svg', import.meta.url).href;
  imgSpinner = new URL('src/assets/img/spinners/spinning-loading-3.gif', import.meta.url).href;


  constructor(private store: Store<{ layout: ILayout }>) {

    this.$layout = this.store.select('layout');

    this.$layout.subscribe((data)=>{

      this.layout = {...data};

      if(this.layout.menu != undefined) {
        this.menu = transformNav(this.layout.menu);
      }
    });
  }

  toggleMinimize(e: boolean) {
    this.minimized = e;
  }

}

export default TemplateComponent;
