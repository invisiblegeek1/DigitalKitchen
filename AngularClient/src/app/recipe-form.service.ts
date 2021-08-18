import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeFormService {
  recipeData: Array<any> = []

  token?:any;

  constructor(private httpClient: HttpClient,private httpHeader:HttpHeaders) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token });

   options = { headers: this.headers };

  saveRecipe(data:any){
    console.log(data);
    let url  = `http://localhost:8081/api/private/recipes`
     return this.httpClient.post(url,data,this.options);

  }
}
