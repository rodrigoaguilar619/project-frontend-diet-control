import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';
import { ModalTypeEnum } from '@app/appComponents/catalogs/enumCatalog';
import { ModalPopupComponent } from '@app/appComponents/components/modals/modal-popup/modal-popup.component';

describe('ModalPopupComponent', () => {
  let component: ModalPopupComponent;
  let fixture: ComponentFixture<ModalPopupComponent>;
  let modalServiceMock: { open: jest.Mock, dismissAll: jest.Mock };

  beforeEach(async () => {
    modalServiceMock = {
      open: jest.fn(),
      dismissAll: jest.fn()
    };

    await TestBed.configureTestingModule({
      imports: [ModalPopupComponent],
      providers: [
        NgbModalConfig,
        { provide: NgbModal, useValue: modalServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPopupComponent);
    component = fixture.componentInstance;
    component.content = {} as TemplateRef<any>;
  });

  describe('ngOnInit', () => {
    it('should throw error if modalType is undefined', () => {
      expect(() => component.ngOnInit()).toThrowError('Modal type not defined');
    });

    it('should configure and not open if isShowPopUp false', () => {
      component.modalType = ModalTypeEnum.CONFIRMATION;
      component.isShowPopUp = false;
      const openSpy = jest.spyOn(component, 'open');

      component.ngOnInit();

      expect(openSpy).not.toHaveBeenCalled();
    });
  });

  describe('ngOnChanges', () => {
    it('should open modal when isShowPopUp becomes true', () => {
      const openSpy = jest.spyOn(component, 'open');

      component.ngOnChanges({
        isShowPopUp: {
          previousValue: false,
          currentValue: true,
          firstChange: false,
          isFirstChange: () => false
        }
      });

      expect(openSpy).toHaveBeenCalled();
    });

    it('should close modal when isShowPopUp becomes false', () => {
      const closeModalSpy = jest.spyOn(component, 'closeModal');

      component.ngOnChanges({
        isShowPopUp: {
          previousValue: true,
          currentValue: false,
          firstChange: false,
          isFirstChange: () => false
        }
      });

      expect(closeModalSpy).toHaveBeenCalled();
    });
  });

  describe('Modal actions', () => {
    it('should open modal', () => {
      component.open();

      expect(modalServiceMock.open).toHaveBeenCalledWith(component.content);
    });

    it('should execute confirm function and dismiss', () => {
      const confirmFn = jest.fn();
      component.executeFunctionOnConfirm = confirmFn;

      component.confirm();

      expect(confirmFn).toHaveBeenCalled();
      expect(modalServiceMock.dismissAll).toHaveBeenCalled();
    });

    it('should execute cancel function and dismiss', () => {
      const cancelFn = jest.fn();
      component.executeFunctionOnCancel = cancelFn;

      component.cancel();

      expect(cancelFn).toHaveBeenCalled();
      expect(modalServiceMock.dismissAll).toHaveBeenCalled();
    });

    it('should execute close function and dismiss', () => {
      const closeFn = jest.fn();
      component.executeFunctionOnClose = closeFn;

      component.close();

      expect(closeFn).toHaveBeenCalled();
      expect(modalServiceMock.dismissAll).toHaveBeenCalled();
    });

    it('should dismiss modal when closeModal is called', () => {
      component.closeModal();

      expect(modalServiceMock.dismissAll).toHaveBeenCalled();
    });
  });
});
