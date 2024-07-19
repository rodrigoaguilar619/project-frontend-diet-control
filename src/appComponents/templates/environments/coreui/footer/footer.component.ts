import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    standalone: true,
})
export class FooterLayoutComponent extends FooterComponent {
  constructor() {
    super();
  }
}
