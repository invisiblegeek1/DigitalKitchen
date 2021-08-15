import { Component, OnInit } from '@angular/core';
import { RecipeFormService } from '../recipe-form.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  data:Array<any> = []
  files:File = null 
  url: String = "https://api.cloudinary.com/v1_1/demo/image/upload"

  constructor(private recipeForm: RecipeFormService) { }

  ngOnInit(): void {
  }


  OnSubmit(data:any){
    console.log(data)
    
    return this.recipeForm.getRecipeData(data);

  }

  OnChangeEvent(event:Event){
    this.files=event.target.files[0]
    
  }
  files :any    = document.querySelector("#Rec").files;
  

}


// const url = "https://api.cloudinary.com/v1_1/yourbites/image/upload";
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const files = document.querySelector("[type=file]").files;
//   const formData = new FormData();

//   for (let i = 0; i < files.length; i++) {
//     let file = files[i];
//     formData.append("file", file);
//     formData.append("upload_preset", "docs_upload_example_us_preset");

//     fetch(url, {
//       method: "POST",
//       body: formData
//     })
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {
//         document.getElementById("data").innerHTML += data;
//       });
//   }
// });


