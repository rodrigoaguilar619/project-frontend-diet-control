import { Component, OnInit } from '@angular/core';
import { InitAppService } from '../../appComponents/configApp/InitAppService';
import { navItems } from '../config/navs/nav.constant';
import { mockApiConfigList } from '../config/mock/mockApiConfig';

@Component({
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