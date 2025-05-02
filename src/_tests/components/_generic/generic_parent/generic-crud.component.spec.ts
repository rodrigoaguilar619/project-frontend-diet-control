import { ComponentFixture, TestBed } from '@angular/core/testing';
import { COMMON_TESTING_PROVIDERS } from '@app/_tests/providers.mock';
import { InputElementEnum } from '@app/appComponents/catalogs/enumCatalog';
import { GenericCrudComponent } from '@app/appComponents/components/_generic/generic-parent/generic-crud/generic-crud.component';

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
