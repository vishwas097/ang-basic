import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient

  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API_KEY': 'ESHIPZ',
    })
  };


login(data){
  let url = 'https://eshipz-qa.herokuapp.com';
  let endpoint = '/api/v1/login';
  return this.http.post(url+endpoint , data ,this.httpOptions );


}


}
