import { INavData } from "@coreui/angular";
import { SUB_PATHS } from "../../../_moduleTest/catalogs/pathsCatalog";

export const navItems: INavData[] = [
  {
    name: 'Principal page',
    url: SUB_PATHS.ADMIN.PRINCIPAL_PAGE.fullPath,
    icon: 'fas fa-home',
    attributes: { disabled: false },
  },
  {
    name: 'Datatable',
    url: SUB_PATHS.DATATABLE.fullPath,
    icon: 'fas fa-pizza-slice',
    children: [
      {
        name: 'Datatable Data',
        url: SUB_PATHS.DATATABLE.DATATABLEDATA.fullPath,
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Forms',
    url: SUB_PATHS.FORMS.fullPath,
    icon: 'fas fa-pizza-slice',
    children: [
      {
        name: 'Input Elements',
        url: SUB_PATHS.FORMS.FORMINPUTELEMENTS.fullPath,
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Input Container',
        url: SUB_PATHS.FORMS.FORMINPUTCONTAINER.fullPath,
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Input Containers',
        url: SUB_PATHS.FORMS.FORMINPUTCONTAINERS.fullPath,
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Input Dynamic Row',
        url: SUB_PATHS.FORMS.FORMINPUTDYNAMICROW.fullPath,
        icon: 'nav-icon-bullet'
      },
    ]
  },
];