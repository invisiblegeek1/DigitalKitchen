import { Component, OnInit } from '@angular/core';
import { RecipeFormService } from '../recipe-form.service';
import { HttpClient } from '@angular/common/http';
import {FormArray, FormControl, FormGroup,Validators} from '@angular/forms';
// import { domainToUnicode } from 'url';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent  {
  angForm = new FormGroup({
    names: new FormArray([
    //  this.ingredients()
    new FormControl('', Validators.required),
    ]),
    amount: new FormArray([
      new FormControl('',Validators.required)
    ])
  
  });
  ingredients(): FormGroup{
    return new FormGroup({
      name : new FormControl('', Validators.required),
      amount : new FormControl('', Validators.required),
    })
  }
  get names(): FormArray {
     return this.angForm.get('names') as FormArray;
     
  }
  get amount(): FormArray{
    return this.angForm.get('amount') as FormArray;
  }
  onFormSubmit(): void {
    for (let i = 0; i < this.names.length; i++) {
      console.log(this.names.at(i).value);
    }
    for (let i = 0; i < this.amount.length; i++) {
      console.log(this.amount.at(i).value);
    }
    
  }
  addNameField() {
    this.names.push(new FormControl('', Validators.required));
    this.amount.push(new FormControl('', Validators.required));
  }

  deleteNameField(index: number) {
    if (this.names.length !== 1) {
      this.names.removeAt(index);
    }
    console.log(this.names.length);
  }
  // data:Array<any> = [] 
  // AddData: Array<any> = []



  // constructor(private recipeForm: RecipeFormService,private http:HttpClient) { }

  // ngOnInit(): void {
  // }
  

  // OnSubmit(data:any){
  //   this.data = [...this.data,...this.AddData]
  //   console.log(data)   
  //   // return this.recipeForm.getRecipeData(data);
  // }



  // addData(){
  //   let Name = document.getElementById("Ingredient_Name");
  //   let Amount =document.getElementById("Ingredient_Amount")
  //   this.AddData = [...this.AddData,...[Name,Amount]]
  //   console.log(this.AddData)

  // }
}
