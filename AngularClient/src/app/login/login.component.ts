import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { RecipeFormService } from '../recipe-form.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private registerService:RegisterService,private recipeService:RecipeFormService) { }
  myToken?:any;
  ngOnInit(): void {
  }

  OnSubmit(loginData:any){
    console.log(loginData)
    this.loginService.login(loginData).subscribe(
      (token:any)=>{
        this.myToken="Bearer ".concat(token)
        this.recipeService.token=this.myToken;
      }
    );
  }
  onSubmit(registerData:any){
    this.registerService.register(registerData).subscribe(
      (response:any)=>{
        console.log(response);
      }
    );
  }
  isShow = false
  showForm(){
    console.log("Displayed")
    this.isShow = !this.isShow;
  }

}
