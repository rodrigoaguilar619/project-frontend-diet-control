import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import RecipeListComponent from './recipe-list/recipe-list.component';

const routes: Routes = [
{
  path: 'list',
  component: RecipeListComponent,
  pathMatch: 'full'
}];

export const appRecipeRoutes: Routes = routes;
