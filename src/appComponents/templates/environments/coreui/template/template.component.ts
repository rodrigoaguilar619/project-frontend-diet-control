import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ILayout } from '@app/appComponents/@types/controller/reducers/ilayout';
import { HeaderLayoutComponent } from '@app/appComponents/templates/environments/coreui/header/header.component';
import { FooterLayoutComponent } from '@app/appComponents/templates/environments/coreui/footer/footer.component';

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
  ]
})
export class TemplateComponent {

  minimized = false;
  $layout: Observable<ILayout>;
  layout: ILayout | undefined;

  constructor(private store: Store<{ layout: ILayout }>) {

    this.$layout = store.select('layout');

    this.$layout.subscribe((data)=>{
      this.layout = {...data};
      console.log("test layout", this.layout);
    });
  }

  toggleMinimize(e: boolean) {
    this.minimized = e;
  }

}

export default TemplateComponent;
