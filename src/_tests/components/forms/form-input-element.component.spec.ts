import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputElementEnum } from '@app/appComponents/catalogs/enumCatalog';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormInputElementComponent } from '@app/appComponents/components/forms/form-input-element/form-input-element.component';

describe('FormInputElementComponent', () => {
  let component: FormInputElementComponent;
  let fixture: ComponentFixture<FormInputElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormInputElementComponent, // standalone
        ReactiveFormsModule,
        DatePickerModule,
        InputNumberModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputElementComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    component.inputProperties = { inputType: InputElementEnum.TEXT } as any;
    component.valueFormControl = new FormControl('');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should throw error if valueFormControl is missing', () => {
    expect(() => fixture.detectChanges()).toThrow('formControl is required');
  });

  it('should throw error if inputProperties is missing', () => {
    component.valueFormControl = new FormControl('');
    expect(() => fixture.detectChanges()).toThrow('inputProperties is required');
  });

  it('should disable formControl if inputProperties.isReadOnly is true', () => {
    component.inputProperties = { inputType: InputElementEnum.TEXT, isReadOnly: true } as any;
    component.valueFormControl = new FormControl('');
    fixture.detectChanges();
    expect(component.valueFormControl.disabled).toBeTruthy();
  });

  it('should subscribe to formControl valueChanges and call executeOnChange', () => {
    const executeOnChangeSpy = jest.fn();
    component.executeOnChange = executeOnChangeSpy;
    component.inputProperties = { inputType: InputElementEnum.TEXT } as any;
    component.valueFormControl = new FormControl('');
    fixture.detectChanges();
    component.valueFormControl.setValue('test value');
    expect(executeOnChangeSpy).toHaveBeenCalled();
  });

  it('should set date if inputType is CALENDAR and formControl has value', () => {
    const now = new Date().getTime();
    component.inputProperties = { inputType: InputElementEnum.CALENDAR } as any;
    component.valueFormControl = new FormControl(now);
    fixture.detectChanges();
    expect(component.date).toEqual(new Date(now));
  });

  it('should set value on calendar change', () => {
    component.inputProperties = { inputType: InputElementEnum.CALENDAR } as any;
    component.valueFormControl = new FormControl(null);
    fixture.detectChanges();

    const mockDate = new Date();
    component.eventInputCalendarChange(mockDate);

    expect(component.valueFormControl.value).toEqual(mockDate.getTime());
  });

  it('should set value on file input change', () => {
    const file = new File([''], 'testfile.txt', { type: 'text/plain' });
    const event = { target: { files: [file] } } as any;

    component.inputProperties = { inputType: InputElementEnum.FILE } as any;
    component.valueFormControl = new FormControl(null);
    fixture.detectChanges();

    component.eventInputFileChange(event);

    expect(component.valueFormControl.value).toEqual(file);
  });

  it('should reset value if no file selected', () => {
    const event = { target: { files: [] } } as any;

    component.inputProperties = { inputType: InputElementEnum.FILE } as any;
    component.valueFormControl = new FormControl('some file');
    fixture.detectChanges();

    component.eventInputFileChange(event);

    expect(component.valueFormControl.value).toBeNull();
  });

  it('should mark formControl as touched on keydown', () => {
    component.inputProperties = { inputType: InputElementEnum.TEXT } as any;
    component.valueFormControl = new FormControl('');
    fixture.detectChanges();

    component.onKeyDown(component.valueFormControl);
    expect(component.valueFormControl.touched).toBeTruthy();
  });

  it('should call executeAfterChange if provided', () => {
    const executeAfterChangeSpy = jest.fn();
    component.executeOnChange(new FormControl(''), executeAfterChangeSpy);
    expect(executeAfterChangeSpy).toHaveBeenCalled();
  });

  it('should not call executeAfterChange if not provided', () => {
    expect(() => component.executeOnChange(new FormControl(''))).not.toThrow();
  });

});
