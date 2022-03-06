import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/'

  constructor(private http:HttpClient) { }

  login(authvalues){
    return this.http.post(this.baseUrl+'AviLeap/auth/login/basic',authvalues);
  }
}

