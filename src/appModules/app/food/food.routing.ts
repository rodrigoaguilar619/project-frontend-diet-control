import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import FoodListComponent from './food-list/food-list.component';
import { SUB_PATHS } from '@app/appModules/catalogs/pathsCatalog';

const routes: Routes = [
{
  path: SUB_PATHS.FOOD.FOOD_LIST.path,
  component: FoodListComponent,
  pathMatch: 'full'
}];

export const appFoodRoutes: Routes = routes;
