import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private registerService:RegisterService,private router:Router) {}

  myToken:any;
  loginErrorMessage: string | null = ""
  
  ngOnInit(): void {
  }

  OnSubmit(loginData:any){  
    console.log(loginData)
    this.loginService.login(loginData).subscribe(
     { next: (response: any) => {
        this.loginErrorMessage=null;
        localStorage.setItem("Auth-Token", response.jwt)
     //   this.router.navigate(['RecipeFormComponent'])
      },
      error: (err: any) => {
        this.loginErrorMessage=err.error.messsage
      }}
      // (token:any)=>{
     
      //  let t= JSON.stringify(token);
      //   this.myToken="Bearer "+token.jwt;
     
      //   this.recipeService.token=this.myToken;
     
      // }
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
