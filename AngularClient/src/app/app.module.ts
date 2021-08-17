import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { RecipesContainerComponent } from './recipes-container/recipes-container.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { LandingPageContainerComponent } from './landing-page-container/landing-page-container.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    RecipesContainerComponent,
    RecipeViewComponent,
    RecipeFormComponent,
    LandingPageContainerComponent,
    IngredientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
