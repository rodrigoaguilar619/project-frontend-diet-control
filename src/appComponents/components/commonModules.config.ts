import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const commonAppModules = [
    NgSelectModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
]
