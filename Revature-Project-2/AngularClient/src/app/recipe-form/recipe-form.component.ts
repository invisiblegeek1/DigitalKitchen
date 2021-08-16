import { Component, OnInit } from '@angular/core';
import { RecipeFormService } from '../recipe-form.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  data:Array<any> = []
  fileData: any =null; 
  url: any = "https://api.cloudinary.com/v1_1/yourbites/image/upload"
  res :any = null;
  constructor(private recipeForm: RecipeFormService,private http:HttpClient) { }

  ngOnInit(): void {
  }
  fileProgress(fileInput: any) {
    this.fileData = <any>fileInput.target.files[0];
}

  OnSubmit(data:any){
    console.log(data)

   
    
    // return this.recipeForm.getRecipeData(data);

  }
  onSubmit() {
   
    }

}
// const formData = new FormData();
// formData.append('file', this.fileData);

// console.log(this.fileData)

// this.http.post("https://api.cloudinary.com/v1_1/yourbites/image/upload", formData)

//   .subscribe(res => {
//     console.log(res);
//     alert('SUCCESS !!');
//   })