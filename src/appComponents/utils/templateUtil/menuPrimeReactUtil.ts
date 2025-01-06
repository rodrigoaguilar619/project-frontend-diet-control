import { AppMenusPropsDataI } from "@app/appComponents/@types/layout/appMenuLayout";

export function transformNav(inputNav: AppMenusPropsDataI[]) {

  return inputNav.map((item) => {

    const transformedItem: any = {
      label: item.text,
      icon: item.icon,
    };

    if (item.children && item.children.length > 0) {
      transformedItem.items = transformNav(item.children);
    }
    else if (item.url) {
      transformedItem.url = "#" + item.url;
    }

    return transformedItem;
  });
}
