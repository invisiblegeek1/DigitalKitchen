import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class RecipeFormService {
  recipeData: Array<any> = []

  constructor(private httpClient: HttpClient) { }

  getRecipeData(data:any){
    console.log(data);
    let url  = ""
    // return this.httpClient.post(url,data).subscribe(
      // recipeData =>{
      //   console.log(data)
      // }

    // )
  }
}
