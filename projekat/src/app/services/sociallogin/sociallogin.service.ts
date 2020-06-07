import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {

  url;
  constructor(private http: HttpClient) { }

  Savesresponse(responce)
  {
    this.url =  'http://localhost:44308/api/ApplicationUser/SocialLogin';
    return this.http.post(this.url,responce);
  }
}


 


