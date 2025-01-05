import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { InitAppService } from '@app/appComponents/configApp/InitAppService';
import { navItems } from '@app/_moduleTest/config/navs/nav.constant';
import { mockApiConfigList } from '@app/_moduleTest/config/mock/mockApiConfig';

@Component({
  imports: [CommonModule, ToastModule, RouterOutlet],
  selector: 'app-root',
  templateUrl: './appTest.component.html',
})
export class AppTestComponent implements OnInit {

  constructor(private initAppService: InitAppService){}

  ngOnInit() {
    this.initAppService.init(navItems, mockApiConfigList);
  }
}

export default AppTestComponent;
