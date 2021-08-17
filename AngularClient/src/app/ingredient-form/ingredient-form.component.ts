import { Component, Input, Output,EventEmitter } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css','../recipe-form/recipe-form.component.css']
})
export class IngredientFormComponent {
  @Input()
  public childForm!:FormGroup

  @Output()
  remove=new EventEmitter();

  RemoveEvent():void{
    this.remove.emit()
  }


  constructor() { }

  static addIngredient():FormGroup{
    return new FormGroup({
    Name:new FormControl(''),
    Amount:new FormControl('')
  })}

 

}
