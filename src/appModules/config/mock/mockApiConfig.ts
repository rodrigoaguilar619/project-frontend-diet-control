import { API_ADMIN_NUTRITIONAL_GOAL_GET } from "../../catalogs/uriCatalog";

const RESPONSE_NUTRITIONAL_GOALS_GET: Record<string, any> =
{
  "nutritionGoal": {
    "fat": 103.0,
    "fatMono": 0.0,
    "fatPoli": 0.0,
    "fatSat": 24.1,
    "fatTrans": 3.4,
    "carbSugar": 0.0,
    "carbSugarAdded": 35.0,
    "fiber": 0.0,
    "cholesterol": 0.3,
    "sodium": 2.3,
    "calories": 112.0,
    "proteins": 146.0,
    "carbohydrates": 397.0
  }
};

export const mockApiConfigList = [
    { method: 'post', url: API_ADMIN_NUTRITIONAL_GOAL_GET, response: { data: RESPONSE_NUTRITIONAL_GOALS_GET }, status: 200 },
    //{ method: 'post', url: URL_DATATABLE_LIST_GET, response: { message: "error business logic" }, status: 422 }
];