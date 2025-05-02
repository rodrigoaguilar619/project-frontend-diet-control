import { IterableDiffers } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import ButtonsOptionsComponent from '@app/appComponents/components/buttons/buttons-options/buttons-options.component';
import { DatatablePrimeBaseComponent } from '@app/appComponents/components/dataTable/datatable-prime-base/datatable-prime-base.component';
import { TableModule } from 'primeng/table';

describe('DatatablePrimeBaseComponent', () => {
  let component: DatatablePrimeBaseComponent;
  let fixture: ComponentFixture<DatatablePrimeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DatatablePrimeBaseComponent, // Important since it's standalone
        TableModule,
        ButtonsOptionsComponent
      ],
      providers: [
        IterableDiffers,
        provideNoopAnimations(), // Optional: disables animations for faster, stable tests
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablePrimeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize default properties', () => {
    expect(component.columns).toEqual([]);
    expect(component.values).toEqual([]);
    expect(component.title).toBe('');
    expect(component.tableWidth).toBe('');
    expect(component.fieldsFilter).toEqual([]);
    expect(component.sectionsProperties).toEqual({ header: true, footer: true, search: true, pagination: true });
    expect(component.buttonsOptionsWidth).toBe('50px');
    expect(typeof component.setMaskData).toBe('function');
  });

  it('should update fieldsFilter on columns change', () => {
    component.columns = [
      { field: 'name', tableConfig: { styleColumnHeaderCss: { color: 'red' } } },
      { field: 'email', tableConfig: { styleColumnHeaderCss: { color: 'red' } } }
    ];

    fixture.detectChanges();
    component.ngDoCheck();

    expect(component.fieldsFilter).toEqual(['name', 'email']);
  });

  it('should merge style objects in setRowStyle', () => {
    const htmlStyleProperties = { color: 'black' };
    const rowCssProperties = { backgroundColor: 'yellow' };

    const result = component.setRowStyle(htmlStyleProperties, rowCssProperties);

    expect(result).toEqual({
      color: 'black',
      backgroundColor: 'yellow'
    });
  });

});
