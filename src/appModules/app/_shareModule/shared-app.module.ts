import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../../appComponents/components/components.module';
import { PrincipalDataComponent } from '../admin/principal-data/principal-data.component';
import { NutritionalRegisterComponent } from '../admin/nutritional-register/nutritional-register.component';
import FoodListComponent from '../food/food-list/food-list.component';
import FoodRegisterMultipleComponent from '../food/food-register-multiple/food-register-multiple.component';
import FoodAddEditComponent from '../food/food-add-edit/food-add-edit.component';
import DietBaseRegisterComponent from '../diet/diet-main/diet-base-register/diet-base-register.component';
import DietFoodsResumeComponent from '../diet/diet-resumes/diet-foods-resume/diet-foods-resume.component';
import DietBaseAddEditComponent from '../diet/diet-crud/diet-base-add-edit/diet-base-add-edit.component';
import RecipeListComponent from '../recipe/recipe-list/recipe-list.component';
import RecipeAddEditComponent from '../recipe/recipe-add-edit/recipe-add-edit.component';
import DietCustomListComponent from '../diet/diet-main/diet-custom-list/diet-custom-list.component';
import { DietCustomDetailResumeComponent } from '../diet/diet-resumes/diet-custom-detail-resume/diet-custom-detail-resume.component';
import DietCustomAddEditComponent from '../diet/diet-crud/diet-custom-add-edit/diet-custom-add-edit.component';
import DietCustomDetailsComponent from '../diet/diet-main/diet-custom-details/diet-custom-details.component';


@NgModule({
  declarations: [
    PrincipalDataComponent,
    NutritionalRegisterComponent,
    FoodListComponent,
    FoodRegisterMultipleComponent,
    FoodAddEditComponent,
    RecipeListComponent,
    RecipeAddEditComponent,
    DietBaseRegisterComponent,
    DietBaseAddEditComponent,
    DietCustomListComponent,
    DietCustomAddEditComponent,
    DietFoodsResumeComponent,
    DietCustomDetailsComponent,
    DietCustomDetailResumeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    PrincipalDataComponent,
    NutritionalRegisterComponent,
    FoodListComponent,
    FoodRegisterMultipleComponent,
    FoodAddEditComponent,
    RecipeListComponent,
    RecipeAddEditComponent,
    DietBaseRegisterComponent,
    DietBaseAddEditComponent,
    DietCustomListComponent,
    DietCustomAddEditComponent,
    DietFoodsResumeComponent,
    DietCustomDetailsComponent,
    DietCustomDetailResumeComponent
  ],
})

export class SharedAppModule {}
