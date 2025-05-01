/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { GenericCrudComponent } from '../../../../appComponents/components/_generic/generic-parent/generic-crud/generic-crud.component';
import { FormBuilder } from '@angular/forms';
import { InputElementEnum } from '@app/appComponents/catalogs/enumCatalog';
import { Store } from '@ngrx/store';*/

/*describe('GenericCrudComponent', () => {
  let component: GenericCrudComponent;
  let fixture: ComponentFixture<GenericCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericCrudComponent], // Import the standalone component
      providers: [
        FormBuilder,
        { provide: Injector, useValue: {} },  // Provide a mock Injector
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct template content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('generic-crud works!');
  });

  it('should have InputElementEnum defined', () => {
    expect(component.inputElementEnum).toBeDefined();
  });

  it('should have formBuilder defined', () => {
    expect(component.formBuilder).toBeDefined();
  });
});
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { GenericCrudComponent } from '@app/appComponents/components/_generic/generic-parent/generic-crud/generic-crud.component';
import { ToastPrimeInstance } from '@app/appComponents/instances/messages/toastPrimeInstance';
import { HttpManagerInstance } from '@app/appComponents/instances/webInstances/httpManagerInstance';
import { InputElementEnum } from '@app/appComponents/catalogs/enumCatalog';
import { COMMON_TESTING_PROVIDERS } from '@app/_tests/providers.mock';

describe('GenericCrudComponent', () => {
  let component: GenericCrudComponent;
  let fixture: ComponentFixture<GenericCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericCrudComponent],  // <-- use imports, not declarations
      providers: [...COMMON_TESTING_PROVIDERS]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize formBuilder', () => {
    expect(component.formBuilder).toBeDefined();
  });

  it('should have inputElementEnum set', () => {
    expect(component.inputElementEnum).toEqual(InputElementEnum);
  });
});
