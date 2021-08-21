import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url:any;

  page:any=0

  recipeStream:Subject<any>=new Subject();

  constructor(private httpClient: HttpClient) { 
    
  }

  getNextPage(){
     let pg=localStorage.getItem("pageNo");
     let nextPg:any;
     if(pg!=null)
       nextPg = +pg;
    localStorage.setItem("pageNo",nextPg.toString())
    this.page=nextPg;
  }

  getPreviousPage(){
    let pg=localStorage.getItem("pageNo");
     let nextPg:any;
     if(pg!=null)
       nextPg = -pg;
    localStorage.setItem("pageNo",nextPg.toString())
    this.page=nextPg;
  }

  getAllRecipes(){
    this.url=`http://localhost:8081/api/recipes/all?page=${this.page}`

    this.httpClient.get(this.url).subscribe((recipes:any)=>{
      this.recipeStream.next(recipes);
    });
  }

  getRecipeByName(name:any){
    this.url=`http://localhost:8081/api/recipes/paginated/${name}?page=${this.page}`

    this.httpClient.get(this.url).subscribe((recipes:any)=>{
      this.recipeStream.next(recipes);
    });
  }

  getRecipeByCategory(category:any){
    this.url=`http://localhost:8081/api/recipes/paginated/${category}?page=${this.page}`

    this.httpClient.get(this.url).subscribe((recipes:any)=>{
      this.recipeStream.next(recipes);
    });
  }


  getRecipeById(id:any){
    this.url=`http://localhost:8081/api/recipes//${id}`

   return this.httpClient.get(this.url);
  }

}
