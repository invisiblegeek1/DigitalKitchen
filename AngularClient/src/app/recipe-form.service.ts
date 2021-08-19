import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeFormService {
  recipeData: Array<any> = []

  token:any;

  options:any;

  constructor(private httpClient: HttpClient) { 
    
    
  }
   

  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': this.token });


  saveRecipe(data:any){

    console.log(data);
    console.log(this.options);
   let headers={
      'Authorization': this.token
      
    }
    let url  = `http://localhost:8081/api/private/recipes`
     return this.httpClient.post(url,data,{ headers: headers });

  }
}
