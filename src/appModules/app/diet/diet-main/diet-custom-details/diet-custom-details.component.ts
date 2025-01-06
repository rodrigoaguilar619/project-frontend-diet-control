import { Component, Injector, Input } from '@angular/core';
import { GenericParentComponent } from '@app/appComponents/components/_generic/generic-parent/generic-parent.component';
import { setSubTitle } from '@app/appComponents/controller/actions/layout.actions';
import { debug, generateDebugClassModule } from '@app/appComponents/utils/webUtils/debugUtil';
import { DietService } from '@app/appModules/controller/services/dietService';
import { DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS, DIET_CUSTOM_TOTALS_RESUME_COLUMNS, DIET_FOOD_COLUMNS, DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS } from '@app/appModules/app/diet/diet.contants';
import { dataTablePropertiesEnum } from '@app/appModules/catalogs/enumCatalog';
import DietFoodsResumeComponent from '@app/appModules/app/diet/diet-resumes/diet-foods-resume/diet-foods-resume.component';
import { commonAppModules } from '@app/appComponents/components/commonModules.config';
import { commonAppComponents } from '@app/appComponents/components/commonComponents.config';
import { AccordionModule } from 'primeng/accordion';

@Component({
  imports: [commonAppModules, commonAppComponents, DietFoodsResumeComponent, AccordionModule],
  selector: 'app-diet-custom-details',
  templateUrl: './diet-custom-details.component.html'
})
export class DietCustomDetailsComponent extends GenericParentComponent {

  @Input() idDietCustom: any = null;

  public params: any;
  public subTotalDietBase = {};
  public subTotalDietCustom = {};
  public totalDiet = {};
  public totalTableValues: any[] = [];
  public nutritionalGoals = {};
  public recipe = { instructions: "" };
  public foodsDietBaseValues: any = [];
  public foodsDietCustomValues: any = [];
  public dataTableSectionsProperties = { header: false, footer: false, search: false, pagination: false }
  public totalTableColumns = DIET_CUSTOM_TOTALS_RESUME_COLUMNS;
  public foodColumns = DIET_FOOD_COLUMNS;
  public dataTableFoodSectionsProperties = { header: false, footer: false, search: false, pagination: false }

  constructor(injector: Injector, private dietService: DietService) {
    super(injector);

    this.params = this.routerActive.snapshot.queryParams;

  }

  ngOnInit(): void {

    if (this.params.idDietCustom != null && this.params.idDietCustom != undefined) {
      this.idDietCustom = this.params.idDietCustom;
    }
    else if (this.idDietCustom == null)
      throw new Error("idDietCustom is null");

    this.getDietCustomService(this.idDietCustom);
  }

  getDietCustomService(idDietCustom: number) {

    let debugClass = generateDebugClassModule("init diet custom detail module");
      debug(debugClass, "start");

      this.spinner.show();

      this.dietService.getDietCustomService(idDietCustom)
          .then((dietCustomData: any) => {

              debug(debugClass, "result", dietCustomData);

              this.store.dispatch(setSubTitle({ subTitle: "Diet custom detail: [" + dietCustomData.data.dietCustom.recipe.id + "] - " + dietCustomData.data.dietCustom.recipe.title }));

              this.subTotalDietBase = dietCustomData.data.subTotalDietBase;
              this.subTotalDietCustom = dietCustomData.data.subTotalDietCustom;
              this.nutritionalGoals = dietCustomData.data.nutritionalGoals;
              this.foodsDietBaseValues = dietCustomData.data.foodsDietBase;

              this.totalDiet = this.getTotalResume(this.subTotalDietBase, this.subTotalDietCustom);
              this.totalTableValues.push({...this.subTotalDietBase, [DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTALS_TITLE]: "Subtotal diet base"});
              this.totalTableValues.push({...this.subTotalDietCustom, [DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTALS_TITLE]: "Subtotal diet custom"});
              this.totalTableValues.push({...this.totalDiet, [DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTALS_TITLE]: "Totals", rowCssProperties: { backgroundColor: dataTablePropertiesEnum.colorTotals, fontWeight: '700', texatAlign: 'center' }});
              this.totalTableValues.push({...this.nutritionalGoals,
                [DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTALS_TITLE]: "Nutritional goals",
                rowCssProperties: { backgroundColor: dataTablePropertiesEnum.colorTotals, fontWeight: '700', texatAlign: 'center' },
                [DIET_CUSTOM_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_QUANTITY_GRAMS]: "--"
              });

              if (dietCustomData.data.dietCustom !== null) {

                this.foodsDietCustomValues = dietCustomData.data.dietCustom.foods;
                this.recipe = dietCustomData.data.dietCustom.recipe;
              }

              this.spinner.hide();

          })
          .catch((error: any) => {
              this.httpManagerInstance.manageAlertModuleError(this.componentType, debugClass, error);
          });
  }

  getTotalResume(subTotalDietBase: any, subTotalDietCustom: any) {

    let dietFoodTotal: Record<string, any> = {};

    Object.values(DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS).forEach((value) => {
      dietFoodTotal[value] = subTotalDietBase[value] + subTotalDietCustom[value];
    });

    return dietFoodTotal;
  }

}

export default DietCustomDetailsComponent;
