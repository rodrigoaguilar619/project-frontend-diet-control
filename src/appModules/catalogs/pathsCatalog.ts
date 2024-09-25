export const SUB_PATHS = {
    LOGIN: {
      path: "login",
      fullPath: "/login"
    },
    LOGOUT: {
      path: "logout",
      fullPath: "/logout"
    },
    ADMIN: {
        path: "admin",
        fullPath: "/admin",
        PRINCIPAL_PAGE: {
            path: "principal",
            fullPath: "admin/principal"
        }
    },
    DIET: {
        path: "diet",
        fullPath: "/diet",
        DIET_CUSTOM_DETAILS: {
            path: "dietCustomDetails",
            fullPath: "/diet/dietCustomDetails"
        },
        DIET_CUSTOM_LIST: {
            path: "dietCustomList",
            fullPath: "/diet/dietCustomList"
        },
        DIET_BASE_REGISTER: {
            path: "registerDietBase",
            fullPath: "/diet/registerDietBase"
        }
    },
    RECIPE: {
        path: "recipe",
        fullPath: "/recipe",
        RECIPE_LIST: {
            path: "list",
            fullPath: "/recipe/list"
        }
    },
    FOOD: {
        path: "food",
        fullPath: "/food",
        FOOD_LIST: {
            path: "list",
            fullPath: "/food/list"
        }
    }
}
