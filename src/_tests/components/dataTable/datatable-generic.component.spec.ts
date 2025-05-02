import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatatableGenericComponent } from '@app/appComponents/components/dataTable/datatable-generic/datatable-generic.component';
import { IterableDiffers } from '@angular/core';

describe('DatatableGenericComponent', () => {
  let component: DatatableGenericComponent;
  let fixture: ComponentFixture<DatatableGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatableGenericComponent],
      providers: [IterableDiffers]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize default values', () => {
    expect(component.columns).toEqual([]);
    expect(component.values).toEqual([]);
    expect(component.title).toBe('');
    expect(component.tableWidth).toBe('');
    expect(component.fieldsFilter).toEqual([]);
    expect(component.sectionsProperties).toEqual({ header: true, footer: true, search: true, pagination: true });
    expect(component.buttonsOptionsWidth).toBe('50px');
    expect(typeof component.setMaskData).toBe('function');
  });

  it('should update fieldsFilter when columns change', () => {
    component.columns = [
      { field: 'id' },
      { field: 'name' },
      { field: 'email' }
    ];

    fixture.detectChanges();

    component.ngDoCheck(); // simulate the change detection manually

    expect(component.fieldsFilter).toEqual(['id', 'name', 'email']);
  });

  it('should merge htmlStyleProperties and rowCssProperties in setRowStyle', () => {
    const htmlStyleProperties = { color: 'red', fontSize: '12px' };
    const rowCssProperties = { backgroundColor: 'blue' };

    const result = component.setRowStyle(htmlStyleProperties, rowCssProperties);

    expect(result).toEqual({
      color: 'red',
      fontSize: '12px',
      backgroundColor: 'blue'
    });
  });
});
