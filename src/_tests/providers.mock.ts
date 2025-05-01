import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastPrimeInstance } from '@app/appComponents/instances/messages/toastPrimeInstance';
import { HttpManagerInstance } from '@app/appComponents/instances/webInstances/httpManagerInstance';
import { Injector } from '@angular/core';

// Mock classes
export class MockStore {}
export class MockRouter {}
export class MockActivatedRoute {}
export class MockDomSanitizer {}
export class MockNgxSpinnerService {}
export class MockToastPrimeInstance {}
export class MockHttpManagerInstance {}

// Reusable Providers Array
export const COMMON_TESTING_PROVIDERS = [
  { provide: Store, useClass: MockStore },
  { provide: Router, useClass: MockRouter },
  { provide: ActivatedRoute, useClass: MockActivatedRoute },
  { provide: DomSanitizer, useClass: MockDomSanitizer },
  { provide: NgxSpinnerService, useClass: MockNgxSpinnerService },
  { provide: ToastPrimeInstance, useClass: MockToastPrimeInstance },
  { provide: HttpManagerInstance, useClass: MockHttpManagerInstance },
  { provide: Injector, useValue: Injector.create({ providers: [] }) }
];
