import { AppMenusPropsDataI } from "@app/appComponents/@types/layout/appMenuLayout";

function isExternalLink(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

function setExternalLink(url: string): string {
  if (isExternalLink(url))
    return url;
  return '#' + url;
}

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
      transformedItem[(item.isOpenExternal) ? 'url' : 'routerLink' ] = [ (item.isOpenExternal) ? setExternalLink(item.url) : item.url];
    }

    return transformedItem;
  });
}