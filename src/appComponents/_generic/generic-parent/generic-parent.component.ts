import { Component, ElementRef, Injector, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { _APP_ENVIRONMENT_ } from '../../catalogs/constantCatalog';
import { ComponentTypeEnum, EnvironmentEnum } from '../../catalogs/enumCatalog';
import { ToastPrimeInstance } from '../../instances/messages/toastPrimeInstance';
import { HttpManagerInstance } from '../../instances/webInstances/httpManagerInstance';
import { buildJsonFromFormArray, buildJsonFromFormGroup } from '../../utils/angularUtils/dataFormsParseUtil';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-generic-parent',
  templateUrl: './generic-parent.component.html'
})
export class GenericParentComponent {

  protected store: Store;
  protected router: Router;
  protected routerActive: ActivatedRoute;
  protected sanitizer: DomSanitizer;
  protected elementRef: ElementRef;
  protected spinner: NgxSpinnerService;
  protected toastPrimeInstance: ToastPrimeInstance;
  protected httpManagerInstance: HttpManagerInstance;

  public componentType: ComponentTypeEnum = ComponentTypeEnum.MODULE;

  @Input() public executeOnSubmitFunction!: Function;

  constructor(injector: Injector) {
    this.store = injector.get(Store);
    this.router = injector.get(Router);
    this.sanitizer = injector.get(DomSanitizer);
    this.routerActive = injector.get(ActivatedRoute);
    this.spinner = injector.get(NgxSpinnerService);
    this.toastPrimeInstance = injector.get(ToastPrimeInstance);
    this.httpManagerInstance = injector.get(HttpManagerInstance);
    this.elementRef = injector.get(ElementRef);
  }

  buildJsonFromFormGroup(title: string, formGroup: FormGroup) {
    
    if (_APP_ENVIRONMENT_ !== EnvironmentEnum.PRODUCTION)
      return title + " " + buildJsonFromFormGroup(formGroup);

    return undefined;
  }

  buildJsonFromFormArray(title: string, formArray: FormArray) {

    if (_APP_ENVIRONMENT_ !== EnvironmentEnum.PRODUCTION)
      return title + " " + buildJsonFromFormArray(formArray);

    return undefined;
  }

  buildJsonToString(data: any) {
    return JSON.stringify(data);
  }

}
