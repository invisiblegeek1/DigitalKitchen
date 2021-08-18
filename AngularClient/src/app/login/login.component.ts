import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(loginData:any){
    console.log(loginData)
  }
  onSubmit(registerData:any){
    console.log(registerData)
  }
  isShow = false
  showForm(){
    console.log("Displayed")
    this.isShow = !this.isShow;
  }

}
