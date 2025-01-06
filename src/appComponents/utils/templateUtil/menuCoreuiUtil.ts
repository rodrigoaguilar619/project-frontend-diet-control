import { AppMenusPropsDataI } from "@app/appComponents/@types/layout/appMenuLayout";
import { INavData } from "@coreui/angular";

export function transformNav(inputNav:AppMenusPropsDataI[]) {

  const transformedNav: INavData[] = [
    ];

    inputNav.forEach((navItem) => {
      const transformedItem: INavData = {
        name: navItem.text || '',
        url: navItem.url,
        icon: navItem.icon ?? 'nav-icon-bullet',
        children: navItem?.children?.map((subItem) => ({
          name: subItem.text,
          url: subItem.url,
          icon: 'nav-icon-bullet',
        })),
      };

      transformedNav.push(transformedItem);
    });

    return transformedNav;
  }
