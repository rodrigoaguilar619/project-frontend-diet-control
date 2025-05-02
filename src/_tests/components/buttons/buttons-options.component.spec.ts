import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonsOptionsComponent } from '@app/appComponents/components/buttons/buttons-options/buttons-options.component';
import { By } from '@angular/platform-browser';

describe('ButtonsOptionsComponent', () => {
  let component: ButtonsOptionsComponent;
  let fixture: ComponentFixture<ButtonsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsOptionsComponent],  // standalone component, must be imported
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one button per option', () => {
    component.buttonsOptions = [
      { label: 'Edit', function: jest.fn() },
      { label: 'Delete', function: jest.fn() }
    ];
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
    expect(buttons[0].nativeElement.textContent.trim()).toContain('Edit');
    expect(buttons[1].nativeElement.textContent.trim()).toContain('Delete');
  });

  it('should call the correct function when button clicked', () => {
    const editFn = jest.fn();
    const deleteFn = jest.fn();

    component.rowData = { id: 1 };
    component.rowIndex = 0;
    component.buttonsOptions = [
      { label: 'Edit', function: editFn },
      { label: 'Delete', function: deleteFn }
    ];
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));

    // Click the first button (Edit)
    buttons[0].triggerEventHandler('click', null);
    expect(editFn).toHaveBeenCalledWith(component.rowData, component.rowIndex);

    // Click the second button (Delete)
    buttons[1].triggerEventHandler('click', null);
    expect(deleteFn).toHaveBeenCalledWith(component.rowData, component.rowIndex);
  });

  it('should render icon if provided', () => {
    component.buttonsOptions = [
      { label: 'Edit', function: jest.fn(), icon: 'fa fa-edit' }
    ];
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('em'));
    expect(iconElement).toBeTruthy();
    expect(iconElement.nativeElement.className).toContain('fa-edit');
  });

  it('should apply button styles', () => {
    component.buttonStyles = { backgroundColor: 'red' };
    component.buttonsOptions = [
      { label: 'Styled', function: jest.fn() }
    ];
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    expect(button.styles['background-color']).toBe('red');
  });
});
