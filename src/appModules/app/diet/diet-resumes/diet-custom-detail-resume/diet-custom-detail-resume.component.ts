import { Component, Injector, Input } from '@angular/core';
import { DIET_CUSTOM_DETAIL_FOOD_COLUMNS } from '../../diet.contants';
import { IButtonOptions } from '@app/appComponents/@types/components/buttons/buttons';
import { DietService } from '@app/appModules/controller/services/dietService';
import { dataTablePropertiesEnum } from '@app/appModules/catalogs/enumCatalog';
import { GenericParentComponent } from '@app/appComponents/_generic/generic-parent/generic-parent.component';
import { ModalTypeEnum } from '@app/appComponents/catalogs/enumCatalog';
import ModalClass from '@app/appComponents/classes/modalClass';

enum ModuleDietCustomDetailDataEnum {
  MODAL_ADD_EDIT_DIET_CUSTOM = "add_edit_diet_custom",
  MODAL_RESUME_DIET_CUSTOM = "modal_resume_diet_custom",
}

@Component({
  selector: 'app-diet-custom-detail-resume',
  templateUrl: './diet-custom-detail-resume.component.html'
})
export class DietCustomDetailResumeComponent extends GenericParentComponent {
  
  public dataTableSectionsProperties = { header: true, footer: false, search: false, pagination: false }
  public moduleEnum = ModuleDietCustomDetailDataEnum;
  @Input() dietCustomDetailValues: any = [];
  public dietCustomDetailColumns = DIET_CUSTOM_DETAIL_FOOD_COLUMNS;
  @Input() dietCustomDetail: any = {};
  public idDietCustomEdit:any = null;
  public modalClass: ModalClass = new ModalClass(false, ModalTypeEnum.POPUP);

  public buttonsOptions: IButtonOptions[] = [
    {
      label: "",
      function: this.openModalEditDietCustom.bind(this),
      icon: "far fa-edit",
      title: "Edit diet custom"
    },
    {
      label: "",
      function: this.openModalResumeDietCustom.bind(this),
      icon: "far fa-file",
      title: "Resume diet custom"
    },
    {
      label: "",
      function: this.downloadDietReportService.bind(this),
      icon: "fa fa-download",
      title: "download diet report"
    }
  ]

  constructor(injector: Injector, private dietService: DietService) {
    super(injector);
  }

  ngOnInit(): void {
    this.dietCustomDetailValues = this.addRowTotals(this.dietCustomDetail).foods;
  }

  closeModal() {
    this.modalClass.setIsShowPopUp(false);
  }

  addRowTotals(dietCustomDetail: any) {

    if (dietCustomDetail.recipe !== undefined) {

      dietCustomDetail.foods.push(this.generateRowTotals(dietCustomDetail.subTotalDietBase, "Subtotal diet base"));
      dietCustomDetail.foods.push(this.generateRowTotals(dietCustomDetail.subTotalDietCustom, "Subtotal diet custom"));
      dietCustomDetail.foods.push(this.generateRowTotals(dietCustomDetail.totalDiet, "TOTAL"));
    }
    return dietCustomDetail;
  }

  generateRowTotals(subTotalDiet: any, description: string) {
    return {
      rowCssProperties: { backgroundColor: dataTablePropertiesEnum.colorTotals, fontWeight: '700', texatAlign: 'center' },
        description : description,
        portions : null,
        proteins : subTotalDiet.totalProteins,
        carbohydrates : subTotalDiet.totalCarbohydrates,
        fat : subTotalDiet.totalFat,
        quantityGrams : subTotalDiet.totalQuantityGrams,
        calories : subTotalDiet.totalCalories,
        fatMono : subTotalDiet.totalFatMono,
        fatPoli : subTotalDiet.totalfatPoli,
        fatSat : subTotalDiet.totalfatSat,
        fatTrans : subTotalDiet.totalfatTrans,
        carbSugar : subTotalDiet.totalCarbSugar,
        carbSugarAdded : subTotalDiet.totalCarbSugarAdded,
        fiber : subTotalDiet.totalFiber,
        cholesterol : subTotalDiet.totalCholesterol,
        sodium : subTotalDiet.totalSodium,
    }
  }

  openModalEditDietCustom() {
    this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
    this.modalClass.setDataModal(this.moduleEnum.MODAL_ADD_EDIT_DIET_CUSTOM, "EDIT DIET CUSTOM ID: " + this.dietCustomDetail.idDietCustom, this.closeModal.bind(this));
    this.idDietCustomEdit = this.dietCustomDetail.idDietCustom;
  }

  openModalResumeDietCustom() {
    this.idDietCustomEdit = null;
    this.modalClass.setConfig(true, ModalTypeEnum.POPUP, "xl");
    this.modalClass.setDataModal(this.moduleEnum.MODAL_RESUME_DIET_CUSTOM, "RESUME DIET CUSTOM: " + this.dietCustomDetail.recipe.title, this.closeModal.bind(this));
    this.idDietCustomEdit = this.dietCustomDetail.idDietCustom;
  }

  downloadDietReportService() {
    this.dietService.downloadDietReportService(this.dietCustomDetail.idDietCustom, this.componentType);
  }

  executeAfterSubmit() {
    this.executeOnSubmitFunction();
    this.modalClass.setIsShowPopUp(false);
  }

}
