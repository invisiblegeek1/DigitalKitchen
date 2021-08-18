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

  OnSubmit(data:any){
    console.log(data)
  }
  isShow = false
  showForm(){
    console.log("Displayed")
    this.isShow = !this.isShow;
  }

}