import { ModalTypeEnum } from "@app/appComponents/catalogs/enumCatalog";

class ModalClass {

    public title: string = "";
    public text: string = "";
    public contentText: string = "";
    public moduleToShow: string = "";
    public executeFunctionOnClose: Function = function () { };
    public executeFunction: Function = function () { };
    public isShowPopUp: boolean;
    public size: string = "md";
    public modalType: ModalTypeEnum;

    constructor(isShowPopUp: boolean, modalType: ModalTypeEnum) {
        this.isShowPopUp = isShowPopUp;
        this.modalType = modalType;
    }

    setConfig(isShowPopUp: boolean, modalType: ModalTypeEnum, size?: string) {
        this.isShowPopUp = isShowPopUp;
        this.modalType = modalType;

        if (size !== undefined)
            this.size = size;
    }

    setDataModal(moduleToShow: string, title: string, executeFunctionOnClose: Function) {
        this.moduleToShow = moduleToShow;
        this.title = title;
        this.executeFunctionOnClose = executeFunctionOnClose;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getText() {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }

    getExecuteFunctionOnClose() {
        return this.executeFunctionOnClose;
    }

    setExecuteFunctionOnClose(executeFunctionOnClose: Function) {
        this.executeFunctionOnClose = executeFunctionOnClose;
    }

    getIsShowPopUp() {
        return this.isShowPopUp;
    }

    setIsShowPopUp(isShowPopUp: boolean) {
        this.isShowPopUp = isShowPopUp;
    }

    getContentText() {
        return this.contentText;
    }

    setContentText(contentText: string) {
        this.contentText = contentText;
    }

    getModuleToShow() {
        return this.moduleToShow;
    }

    setModuleToShow(moduleToShow: string) {
        this.moduleToShow = moduleToShow;
    }

    getSize() {
        return this.size;
    }

    setSize(size: string) {
        this.size = size;
    }

    getModalType() {
        return this.modalType;
    }

    setModalType(modalType: ModalTypeEnum) {
        this.modalType = modalType;
    }

    getExecuteFunction() {
        return this.executeFunction;
    }

    setExecuteFunction(executeFunction: Function) {
        this.executeFunction = executeFunction;
    }
}

export default ModalClass;
