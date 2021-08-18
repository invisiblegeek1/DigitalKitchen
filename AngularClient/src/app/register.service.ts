import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(userDetails:any){
    let url  = `http://localhost:8081/api/users`
    return this.httpClient.post(url,userDetails);
  }
}
