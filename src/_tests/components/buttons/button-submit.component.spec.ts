import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonSubmitComponent } from '@app/appComponents/components/buttons/button-submit/button-submit.component';
import { By } from '@angular/platform-browser';

describe('ButtonSubmitComponent', () => {
  let component: ButtonSubmitComponent;
  let fixture: ComponentFixture<ButtonSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSubmitComponent],  // Remember: it's standalone!
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the default title', () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.textContent.trim()).toBe('Save');
  });

  it('should display the custom title when set', () => {
    component.title = 'Submit Form';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.textContent.trim()).toBe('Submit Form');
  });

  it('should call clickFunction when button is clicked', () => {
    const clickSpy = jest.fn();
    component.clickFunction = clickSpy;
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', null);

    expect(clickSpy).toHaveBeenCalled();
  });
});
