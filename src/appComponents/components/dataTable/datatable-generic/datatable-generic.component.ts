import { Component, Input, IterableDiffers } from '@angular/core';
import { IButtonOptions } from '@app/appComponents/@types/components/buttons/buttons';
import { maskData } from '@app/appComponents/utils/dataUtils/maskDataUtil';

@Component({
  selector: 'app-datatable-generic',
  templateUrl: './datatable-generic.component.html'
})
export class DatatableGenericComponent {

  @Input() columns: any;
  @Input() values: any;
  @Input() title: string;
  @Input() fieldsFilter: any;
  @Input() tableWidth: string;
  @Input() buttonsOptions?: IButtonOptions[];
  @Input() sectionsProperties: any;
  @Input() buttonsOptionsWidth?: any;
  @Input() setMaskData: Function;

  public iterableDiffer: any;

  constructor(public iterableDiffers: IterableDiffers) {

    this.setMaskData = maskData;
    this.columns = [];
    this.values = [];
    this.title = "";
    this.tableWidth = "";
    this.fieldsFilter = [];
    this.sectionsProperties = { header: true, footer: true, search: true, pagination: true }
    this.buttonsOptionsWidth = "50px";

    this.iterableDiffer = iterableDiffers.find([]).create(undefined);
  }

  ngDoCheck(): void {

    let changesColumns = this.iterableDiffer.diff(this.columns);

    if (changesColumns) {
      this.fieldsFilter = this.columns.map((column: any) => { return column.field });
    }
  }

  setRowStyle(htmlStyleProperties: any, rowCssProperties: any) {


    return { ...htmlStyleProperties, ...rowCssProperties };
  }

}
