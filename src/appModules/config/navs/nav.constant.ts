import { INavData } from "@coreui/angular";
import { SUB_PATHS } from "../../catalogs/pathsCatalog";

export const navItems: INavData[] = [
  {
    name: 'Principal page',
    url: SUB_PATHS.ADMIN.PRINCIPAL_PAGE.fullPath,
    icon: 'fas fa-home',
    attributes: { disabled: false },
  },
  {
    name: 'Food list',
    url: SUB_PATHS.FOOD.FOOD_LIST.fullPath,
    icon: 'fas fa-pizza-slice',
    attributes: { disabled: false },
  },
  {
    name: 'Recipe list',
    url: SUB_PATHS.RECIPE.RECIPE_LIST.fullPath,
    icon: 'fas fa-sink',
    attributes: { disabled: false },
  },
  {
    name: 'Diet base',
    url: SUB_PATHS.DIET.DIET_BASE_REGISTER.fullPath,
    icon: 'fas fa-drumstick-bite',
    attributes: { disabled: false },
  },
  {
    name: 'Diet custom list',
    url: SUB_PATHS.DIET.DIET_CUSTOM_LIST.fullPath,
    icon: 'fas fa-hamburger',
    attributes: { disabled: false },
  }
];