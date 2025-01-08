import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { ILayout } from '@app/appComponents/@types/controller/reducers/ilayout';
import { HeaderLayoutComponent } from '@app/appComponents/templates/environments/primeng/header/header.component';
import { MenuLayoutComponent } from '@app/appComponents/templates/environments/primeng/menu/menu.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  standalone: true,
  imports: [
    NgxSpinnerComponent,
    RouterLink,
    NgScrollbar,
    HeaderLayoutComponent,
    MenuLayoutComponent,
    RouterOutlet
  ]
})
export class TemplateComponent {

  $layout: Observable<ILayout>;
  layout: ILayout | undefined;

  items: MenuItem[] | undefined;

  constructor(private store: Store<{ layout: ILayout }>) {

    this.$layout = this.store.select('layout');

    this.$layout.subscribe((data)=>{

      this.layout = {...data};
    });
  }

}

export default TemplateComponent;
