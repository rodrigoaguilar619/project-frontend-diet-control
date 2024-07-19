import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AccordionModule } from 'primeng/accordion';
import { NgSelectModule } from '@ng-select/ng-select';

import * as fromComponents from './';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    ...fromComponents.components,
  ],
  imports: [
    RouterModule,
    TableModule,
    CalendarModule,
    InputNumberModule,
    NgSelectModule,
    HttpClientModule,
    CommonModule,
    ToastModule,
    AccordionModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...fromComponents.components,
    RouterModule,
    TableModule,
    NgSelectModule,
    HttpClientModule,
    CommonModule,
    ToastModule,
    AccordionModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MessageService,
  ]
})
export class ComponentsModule { }
