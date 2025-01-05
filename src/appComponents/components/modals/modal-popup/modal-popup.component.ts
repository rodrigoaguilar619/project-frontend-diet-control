import { Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalTypeEnum } from '@app/appComponents/catalogs/enumCatalog';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
})
export class ModalPopupComponent implements OnInit {

  @ViewChild('content', { read: TemplateRef }) content: TemplateRef<any> | undefined;

  @Input() title = "";
  @Input() text = "";
  @Input() executeFunctionOnClose = function() {};
  @Input() executeFunctionOnCancel = function() {};
  @Input() executeFunctionOnConfirm = function() {};
  @Input() isShowPopUp = false;
  @Input() modalType: ModalTypeEnum | undefined;
  @Input() size = "xl";

  public modalTypeEnum = ModalTypeEnum;

  constructor(private config: NgbModalConfig, private modalService: NgbModal) {

    this.configModal();
  }

  ngOnInit(): void {

    if (this.modalType === undefined)
      throw new Error("Modal type not defined");

    this.config.size = this.size;

    if (this.isShowPopUp)
      this.open();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.isShowPopUp !== undefined && changes.isShowPopUp.currentValue != changes.isShowPopUp.previousValue) {
     if (changes.isShowPopUp.currentValue)
      this.open();
      else
        this.closeModal();
    }
}

  configModal() {
    this.config.backdrop = 'static';
    this.config.keyboard = false;
    this.config.size = this.size;
  }

  open() {
    this.configModal();
    this.modalService.open(this.content);
  }

  confirm() {

    if (this.executeFunctionOnConfirm !== undefined) {
      this.executeFunctionOnConfirm();
      this.modalService.dismissAll();
    }
  }

  cancel() {

    if (this.executeFunctionOnCancel !== undefined) {
      this.executeFunctionOnCancel();
      this.modalService.dismissAll();
    }
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  close() {
    this.executeFunctionOnClose();
    this.modalService.dismissAll();
  }

}

export default ModalPopupComponent;
