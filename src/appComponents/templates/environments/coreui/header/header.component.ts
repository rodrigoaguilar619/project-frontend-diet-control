import { Component, Input } from '@angular/core';
import {
  AvatarComponent,
  BadgeComponent,
  BreadcrumbRouterComponent,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  ProgressBarDirective,
  ProgressComponent,
  SidebarToggleDirective,
  TextColorDirective,
  ThemeDirective
} from '@coreui/angular';
import { CommonModule, NgStyle, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { Observable } from 'rxjs';
import { ILayout } from '@app/appComponents/@types/controller/reducers/ilayout';
import { Store } from '@ngrx/store';
import { IUserData } from '@app/appComponents/@types/controller/reducers/iuserData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, ContainerComponent, HeaderTogglerDirective, SidebarToggleDirective, IconDirective, HeaderNavComponent, NavItemComponent, NavLinkDirective, RouterLink, RouterLinkActive, NgTemplateOutlet, BreadcrumbRouterComponent, ThemeDirective, DropdownComponent, DropdownToggleDirective, TextColorDirective, AvatarComponent, DropdownMenuDirective, DropdownHeaderDirective, DropdownItemDirective, BadgeComponent, DropdownDividerDirective, ProgressBarDirective, ProgressComponent, NgStyle]
})
export class HeaderLayoutComponent extends HeaderComponent {

  itemStyle = { "background-color": "transparent", "outline": "none", "color": "inherit" }
  $layout: Observable<ILayout>;
  $userDataState: Observable<IUserData>;
  @Input() layout: ILayout | undefined;
  @Input() userDataState: IUserData | undefined;
  @Input() sidebarId: string = 'sidebar1';

  constructor(private store: Store<{ layout: ILayout, userDataState: IUserData }>) {
    super();

    this.$layout = this.store.select('layout');
    this.$userDataState = this.store.select('userDataState');

    this.$layout.subscribe((data)=>{
      this.layout = {...data};
    });

    this.$userDataState.subscribe((data)=>{
      this.userDataState = {...data};
    });
  }
}
