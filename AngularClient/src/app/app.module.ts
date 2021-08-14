import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { RecipesContainerComponent } from './recipes-container/recipes-container.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { LandingPageContainerComponent } from './landing-page-container/landing-page-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    RecipesContainerComponent,
    RecipeViewComponent,
    RecipeFormComponent,
    LandingPageContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
