import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ILayout } from '@app/appComponents/@types/controller/reducers/ilayout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [NgStyle]
})
export class HeaderLayoutComponent {

  $layout: Observable<ILayout>;
  @Input() layout: ILayout | undefined;

  constructor(private store: Store<{ layout: ILayout }>) {

    this.$layout = this.store.select('layout');

    this.$layout.subscribe((data)=>{
      this.layout = {...data};
    });
  }
}
