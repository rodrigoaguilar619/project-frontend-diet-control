import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { RouterOutlet } from '@angular/router';
import { InitAppService } from '@app//appComponents/configApp/InitAppService';
import { navItems } from '@app/appModules/config/navs/nav.constant';
import { mockApiConfigList } from '@app/appModules/config/mock/mockApiConfig';

@Component({
  imports: [CommonModule, ToastModule, RouterOutlet],
  selector: 'app-root',
  templateUrl: './appMain.component.html'
})
export class AppMainComponent implements OnInit {

  constructor(private initAppService: InitAppService){}

  ngOnInit() {
    this.initAppService.init(navItems, mockApiConfigList);
  }
}

export default AppMainComponent;
