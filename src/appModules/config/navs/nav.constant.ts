import { SUB_PATHS } from "@app/appModules/catalogs/pathsCatalog";
import { AppMenusPropsDataI } from "@app/appComponents/@types/layout/appMenuLayout";

export const navItems: AppMenusPropsDataI[] = [
  {
    text: 'Principal page',
    url: SUB_PATHS.ADMIN.PRINCIPAL_PAGE.fullPath,
    icon: 'fas fa-home',
  },
  {
    text: 'Food',
    url: SUB_PATHS.FOOD.FOOD_LIST.fullPath,
    icon: 'fas fa-pizza-slice',
    children: [
      {
        text: 'Food List',
        url: SUB_PATHS.FOOD.FOOD_LIST.fullPath,
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    text: 'Recipes',
    url: SUB_PATHS.RECIPE.RECIPE_LIST.fullPath,
    icon: 'fas fa-sink',
    children: [
      {
        text: 'Recipe List',
        url: SUB_PATHS.RECIPE.RECIPE_LIST.fullPath,
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    text: 'Diet',
    url: SUB_PATHS.DIET.DIET_BASE_REGISTER.fullPath,
    icon: 'fas fa-drumstick-bite',
    children: [
      {
        text: 'Diet Base',
        url: SUB_PATHS.DIET.DIET_BASE_REGISTER.fullPath,
        icon: 'nav-icon-bullet',
      },
      {
        text: 'Diet Custom List',
        url: SUB_PATHS.DIET.DIET_CUSTOM_LIST.fullPath,
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    text: 'Logout',
    url: SUB_PATHS.LOGOUT.fullPath,
    icon: 'fas fa-sign-out-alt',
  },
];
