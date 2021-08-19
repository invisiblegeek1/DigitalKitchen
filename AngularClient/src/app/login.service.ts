import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  

  login(userDetails:any){
    let url  = `http://localhost:8081/login`
     return this.httpClient.post(url,userDetails);
  }


}
