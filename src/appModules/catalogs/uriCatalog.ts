import { _APP_URL_CONTEXT_PATH_ } from "@app/appComponents/catalogs/constantCatalog";

const _URL_API_MAIN_ = _APP_URL_CONTEXT_PATH_;
export const API_ADMIN_NUTRITIONAL_GOAL_GET = _URL_API_MAIN_ + "api/admin/nutritionGoals/getNutritionGoals";
export const API_ADMIN_NUTRITIONAL_GOAL_REGISTER = _URL_API_MAIN_ + "api/admin/nutritionGoals/registerNutritionGoals";

export const API_CATALOG_GET_ALL = _URL_API_MAIN_ + "api/admin/catalog/getCatalog";
export const API_CATALOG_RECIPE_GET = _URL_API_MAIN_ + "api/recipe/getCatalog";

export const API_FOOD_LIST_GET = _URL_API_MAIN_ + "api/food/getFoodList";
export const API_FOOD_ADD = _URL_API_MAIN_ + "api/food/addFood";
export const API_FOOD_EDIT = _URL_API_MAIN_ + "api/food/editFood";
export const API_FOOD_DELETE = _URL_API_MAIN_ + "api/food/deleteFood";
export const API_FOOD_GET = _URL_API_MAIN_ + "api/food/getFood";
export const API_FOOD_REGISTER_MULTIPLE = _URL_API_MAIN_ + "api/food/addMultipleFood";

export const API_RECIPE_LIST_GET = _URL_API_MAIN_ + "api/recipe/getRecipeList";
export const API_RECIPE_ADD = _URL_API_MAIN_ + "api/recipe/addRecipe";
export const API_RECIPE_EDIT = _URL_API_MAIN_ + "api/recipe/editRecipe";
export const API_RECIPE_DELETE = _URL_API_MAIN_ + "api/recipe/deleteRecipe";
export const API_RECIPE_GET = _URL_API_MAIN_ + "api/recipe/getRecipe";

export const API_DIET_BASE_GET = _URL_API_MAIN_ + "api/diet/getDietBase";
export const API_DIET_BASE_REGISTER = _URL_API_MAIN_ + "api/diet/registerDietBase";
export const API_DIET_CUSTOM_GET = _URL_API_MAIN_ + "api/diet/getDietCustom";
export const API_DIET_CUSTOM_DELETE = _URL_API_MAIN_ + "api/diet/deleteDietCustom";
export const API_DIET_CUSTOM_ADD = _URL_API_MAIN_ + "api/diet/addDietCustom";
export const API_DIET_CUSTOM_EDIT = _URL_API_MAIN_ + "api/diet/editDietCustom";
export const API_DIET_CUSTOM_LIST_GET = _URL_API_MAIN_ + "api/diet/getDietCustomList";
export const API_DIET_CUSTOM_DETAIL_LIST_GET = _URL_API_MAIN_ + "api/diet/getDietCustomDetailList";
export const API_DIET_REPORT_FILE = _URL_API_MAIN_ + "api/diet/reportDiet";

export const PATH_API_DOCUMENTATION = _URL_API_MAIN_ + "swagger-ui/index.html";
