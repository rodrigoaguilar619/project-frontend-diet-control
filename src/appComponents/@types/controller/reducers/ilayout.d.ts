import { INavData } from "@coreui/angular";
import { AppMenusPropsDataI } from "@app/appComponents/@types/layout/appMenuLayout";

export interface ILayout {
    title: string;
    menu: AppMenusPropsDataI[];
}
