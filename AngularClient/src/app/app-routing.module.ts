import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageContainerComponent } from './landing-page-container/landing-page-container.component';
import { LoginComponent } from './login/login.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { RecipesContainerComponent } from './recipes-container/recipes-container.component';

const routes: Routes = [
  {path:'Home',component: LandingPageContainerComponent},

  {path:'recipeform',component: RecipeFormComponent},
  {path:'recipes',component: RecipesContainerComponent},
  {path:'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
