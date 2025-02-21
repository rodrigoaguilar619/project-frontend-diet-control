import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ILayout } from '@app/appComponents/@types/controller/reducers/ilayout';
import { IUserData } from '@app/appComponents/@types/controller/reducers/iuserData';
import { _APP_VERSION_ } from '@app/appComponents/catalogs/constantCatalog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [NgStyle]
})
export class HeaderLayoutComponent {

  appVersion = _APP_VERSION_;
  $layout: Observable<ILayout>;
  $userDataState: Observable<IUserData>;
  @Input() layout: ILayout | undefined;
  @Input() userDataState: IUserData | undefined;
  isDropdownVisible = false;
  @ViewChild('dropdown') dropdown: ElementRef | undefined;
  @ViewChild('userData') userData: ElementRef | undefined;

  constructor(private store: Store<{ layout: ILayout, userDataState: IUserData }>) {

    this.$layout = this.store.select('layout');
    this.$userDataState = this.store.select('userDataState');

    this.$layout.subscribe((data)=>{
      this.layout = {...data};
    });

    this.$userDataState.subscribe((data)=>{
      this.userDataState = {...data};
    });
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {

    const target = event.target as HTMLElement;

    if (this.isDropdownVisible && this.dropdown && !this.dropdown.nativeElement.contains(target)
          && this.userData && !this.userData.nativeElement.contains(target)) {
      this.isDropdownVisible = false;
    }
  }
}
