import { Component, Input, IterableDiffers, OnInit } from '@angular/core';
import { dataTablePropertiesEnum } from '@app/appModules/catalogs/enumCatalog';
import { DIET_FOOD_COLUMNS, DIET_FOOD_COLUMNS_IDS, DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS } from '../../diet.contants';

@Component({
  selector: 'app-diet-foods-resume',
  templateUrl: './diet-foods-resume.component.html'
})
export class DietFoodsResumeComponent implements OnInit {

  @Input() foodListValues: any = [];
  @Input() totalValues: any = [];
  public foodColumns = DIET_FOOD_COLUMNS;
  public dataTableSectionsProperties = { header: false, footer: false, search: false, pagination: false }

  public iterableDiffer: any;

  constructor(public iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create(undefined);
  }

  ngOnInit(): void {
    if (this.totalValues.length > 0)
      this.foodListValues.push(this.totalValues[0]);
  }

  ngDoCheck(): void {

    let changesValuesTotals = this.iterableDiffer.diff(this.totalValues);
  
    if (changesValuesTotals) {

      if (this.totalValues.length > 0)
        this.foodListValues.push(
          {
          rowCssProperties: { backgroundColor: dataTablePropertiesEnum.colorTotals, fontWeight: '700', texatAlign: 'center' },
          [DIET_FOOD_COLUMNS_IDS.ID] : "--",
          [DIET_FOOD_COLUMNS_IDS.DESCRIPTION] : "TOTALS",
          [DIET_FOOD_COLUMNS_IDS.PROTEIN] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_PROTEINS],
          [DIET_FOOD_COLUMNS_IDS.CARBOHYDRATES] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARBOHYDRATES],
          [DIET_FOOD_COLUMNS_IDS.FAT] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT],
          [DIET_FOOD_COLUMNS_IDS.QUANTITY] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_QUANTITY_GRAMS],
          [DIET_FOOD_COLUMNS_IDS.CALORIES] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CALORIES],
          [DIET_FOOD_COLUMNS_IDS.CARB_SUGAR] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARB_SUGAR],
          [DIET_FOOD_COLUMNS_IDS.CARB_SUGAR_ADDED] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CARB_SUGAR_ADDED],
          [DIET_FOOD_COLUMNS_IDS.FAT_MONO] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_MONO],
          [DIET_FOOD_COLUMNS_IDS.FAT_POLI] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_POLI],
          [DIET_FOOD_COLUMNS_IDS.FAT_SAT] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_SAT],
          [DIET_FOOD_COLUMNS_IDS.FAT_TRANS] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FAT_TRANS],
          [DIET_FOOD_COLUMNS_IDS.FIBER] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_FIBER],
          [DIET_FOOD_COLUMNS_IDS.CHOLESTEROL] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_CHOLESTEROL],
          [DIET_FOOD_COLUMNS_IDS.SODIUM] : this.totalValues[0][DIET_FOOD_TOTALS_RESUME_COLUMNS_IDS.TOTAL_SODIUM],
        });
    }
  }

}

export default DietFoodsResumeComponent;