import { Component, OnInit } from '@angular/core';
import { RecipeFormService } from '../recipe-form.service';
import { HttpClient } from '@angular/common/http';
import {FormArray, FormControl, FormGroup,Validators, FormBuilder} from '@angular/forms';
// import { domainToUnicode } from 'url';

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

  handleSubmit(event: any) {
    if (this.profileFormGroup.valid) {
      console.log(this.profileFormGroup.value);
    }
  }


  addNewItems() {
    const ItemForm: FormGroup = this.fb.group({
      ingredients: [''],
      amount: [0]
    })
    this.items.push(ItemForm)
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
