import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  public recipeForm!: FormGroup;

  ;

 



  constructor() { }

  ngOnInit(): void {
    this.GenerateRecipeForm();


  }

  public GenerateRecipeForm():void{
    this.recipeForm = new FormGroup({
      recipeName:new FormControl(''),
      recipeImageUrl:new FormControl(''),
      recipeCatagory:new FormControl(''),
      recipeProcedure:new FormControl(''),
      IngredientList : new FormArray([
        IngredientFormComponent.addIngredient()
      ]),
    })
  }

  public SubmitRecipeForm(): void{
    console.log(this.recipeForm.value)
  }

  get IngredientList(){
    return this.recipeForm.get('IngredientList') as FormArray;
  }

  addIngredients(){
    this.IngredientList.push(IngredientFormComponent.addIngredient());
  }

  removeIngredient(i:any){
    if(i>0){
    this.IngredientList.removeAt(i);
  }
  }


}
