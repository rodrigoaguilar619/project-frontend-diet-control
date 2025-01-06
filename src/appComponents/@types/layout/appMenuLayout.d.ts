import { Type, TemplateRef } from '@angular/core';
import { INavData } from '@coreui/angular';

export interface AppMenusItemsPropsDataI
{
    //component: Type<any>;
    name: string;
    badge?: {
        color: string;
        text: string;
    };
    icon?: TemplateRef<any> | string;
    to?: string;
    href?: string;
    items?: INavData[];
}

export interface AppMenusPropsDataI {
    text?: string;
    url?: string;
    icon?: string;
    children?: AppMenusPropsDataI[];
}

export interface AppMenusPropsI {
    menu?: AppMenusPropsDataI[];            //for backend, after to process and convert like AppMenusItemsPropsDataI
    menuItems?: AppMenusPropsDataI[];  //for hardcoded menu, defined on project
    isFromApi?: boolean
}


export interface AppMenusSideBarPropsI {
    items: AppMenusItemsPropsDataI[];
}
