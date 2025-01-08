import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ILayout } from '@app/appComponents/@types/controller/reducers/ilayout';
import { transformNav } from '@app/appComponents/utils/templateUtil/menuPrimengUtil';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  standalone: true,
  imports: [NgStyle, Menubar]
})
export class MenuLayoutComponent {

  $layout: Observable<ILayout>;
  @Input() layout: ILayout | undefined;
  menu: MenuItem[] | undefined;

  constructor(private store: Store<{ layout: ILayout }>) {

    this.$layout = this.store.select('layout');

    this.$layout.subscribe((data)=>{
      this.layout = {...data};

      this.menu = transformNav(this.layout.menu);
    });
  }
}
