import { Component, OnInit } from '@angular/core';
import { InitAppService } from '../../appComponents/configApp/InitAppService';
import { navItems } from '../../_moduleTest/config/navs/nav.constant';
import { mockApiConfigList } from '../../_moduleTest/config/mock/mockApiConfig';

@Component({
  selector: 'app-root',
  templateUrl: './appTest.component.html'
})
export class AppTestComponent implements OnInit {
  
  constructor(private initAppService: InitAppService){}

  ngOnInit() {
    this.initAppService.init(navItems, mockApiConfigList);
  }
}

export default AppTestComponent;