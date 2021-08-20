import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeFormService {
  recipeData: Array<any> = []
  

  constructor(private httpClient: HttpClient) { 
    
    
  }
   


  saveRecipe(data:any){
  let url  = `http://localhost:8081/api/private/recipes`
    return this.httpClient.post(url,data,{headers:{
      'Authorization':'Bearer '+localStorage.getItem("Auth-Token")
    }})
  }
}
