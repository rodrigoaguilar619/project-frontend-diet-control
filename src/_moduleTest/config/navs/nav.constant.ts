import { SUB_PATHS } from "@app/_moduleTest/catalogs/pathsCatalog";
import { AppMenusPropsDataI } from "@app/appComponents/@types/layout/appMenuLayout";

export const navItems: AppMenusPropsDataI[] = [
  {
    text: 'Principal page',
    url: SUB_PATHS.ADMIN.PRINCIPAL_PAGE.fullPath,
    icon: 'fas fa-home',
  },
  {
    text: 'Datatable',
    url: SUB_PATHS.DATATABLE.fullPath,
    icon: 'fas fa-pizza-slice',
    children: [
      {
        text: 'Datatable Data',
        url: SUB_PATHS.DATATABLE.DATATABLEDATA.fullPath,
        icon: 'nav-icon-bullet'
      },
    ],
  },
  {
    text: 'Forms',
    url: SUB_PATHS.FORMS.fullPath,
    icon: 'fas fa-pizza-slice',
    children: [
      {
        text: 'Input Elements',
        url: SUB_PATHS.FORMS.FORMINPUTELEMENTS.fullPath,
        icon: 'nav-icon-bullet'
      },
      {
        text: 'Input Container',
        url: SUB_PATHS.FORMS.FORMINPUTCONTAINER.fullPath,
        icon: 'nav-icon-bullet'
      },
      {
        text: 'Input Containers',
        url: SUB_PATHS.FORMS.FORMINPUTCONTAINERS.fullPath,
        icon: 'nav-icon-bullet'
      },
      {
        text: 'Input Dynamic Row',
        url: SUB_PATHS.FORMS.FORMINPUTDYNAMICROW.fullPath,
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    text: 'Logout',
    url: "/#",
    icon: 'fas fa-sign-out-alt',
  }
]
