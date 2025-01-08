import { AppMenusPropsDataI } from "@app/appComponents/@types/layout/appMenuLayout";
import { INavData } from "@coreui/angular";

  function setAttributeUrl(isOpenExternal: boolean | undefined) {
    if (isOpenExternal) {
      return {target: "_blank"};
    }
    return {};
  }

  export function transformNav(inputNav: AppMenusPropsDataI[]): INavData[] {
    const transformItem = (navItem: AppMenusPropsDataI): INavData => {
      const transformedItem: INavData = {
        name: navItem.text || '',
        url: navItem.url,
        icon: navItem.icon ?? 'nav-icon-bullet',
        attributes: setAttributeUrl(navItem.isOpenExternal),
        children: navItem.children?.map(transformItem) // Recursive call for nested children
      };

      return transformedItem;
    };

    return inputNav.map(transformItem); // Transform each top-level item
  }
