import { Component, OnInit } from '@angular/core';
import { RecipeFormService } from '../recipe-form.service';
import { HttpClient } from '@angular/common/http';
import {FormArray, FormControl, FormGroup,Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent  {
  profileFormGroup: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    preparation_time: ['', [Validators.required]],
    total_time: ['', [Validators.required]],
    nutrition: this.fb.array([]),
    category: this.fb.array([]),
    items: this.fb.array([]),
    process: this.fb.array([])

  });


  get items(){
    return this.profileFormGroup.controls['items'] as FormArray
  }
  get category(){
    return this.profileFormGroup.controls['category'] as FormArray
  }
  get process(){
    
    return this.profileFormGroup.controls['process'] as FormArray
  }
  get nutrition(){
    return this.profileFormGroup.controls['nutrition'] as FormArray
  }

  handleSubmit(event: any) {
    this.profileFormGroup.reset();
    
    if (this.profileFormGroup.valid) {
      let categoryList= this.profileFormGroup.controls['category'].value.map( ( el:any )=>{ 
        return el.category; 
       });

       let stepsList= this.profileFormGroup.controls['process'].value.map( ( el:any )=>{
        return el.process; 
       } );

      let recipe:any={
        name:this.profileFormGroup.controls['name'].value,
        preparation_time:this.profileFormGroup.controls['preparation_time'].value,
        total_time:this.profileFormGroup.controls['total_time'].value ,
        nutrients:this.profileFormGroup.controls['nutrition'].value,
        category:categoryList,
        ingredients:this.profileFormGroup.controls['items'].value ,
        steps:stepsList 
      }

   console.log(recipe);

   this.recipeService.saveRecipe(recipe).subscribe((response)=>{
     console.log(response);
   },(err)=>{
     console.log(err);
   });
   
  


  }
}


  addNewItems() {
    const ItemForm: FormGroup = this.fb.group({
      name: [''],
      quantity: [0]
    })
    this.items.push(ItemForm)
  }
  addNewNutrition() {
    const NutritionForm: FormGroup = this.fb.group({
      name: [''],
      amount: [0]
    })
    this.nutrition.push(NutritionForm)
  }
  addNewCategory() {
    const CategoryForm: FormGroup = this.fb.group({
      category: ['']
    })
    this.category.push(CategoryForm)
  }
  addNewProcess() {
    const ProcessForm: FormGroup = this.fb.group({
      process: ['']
    })
    
    this.process.push(ProcessForm)
  }


  removeCategory(idx:number) {
    this.category.removeAt(idx)
  }

  removeItems(idx:number) {
    this.items.removeAt(idx)
  }
  removeProcess(idx:number) {
    this.process.removeAt(idx)
  }

  removeNutrition(idx:number) {
    this.nutrition.removeAt(idx)
  }

  constructor(private fb: FormBuilder,private recipeService:RecipeFormService) { }

  ngOnInit(): void {
  }

}
