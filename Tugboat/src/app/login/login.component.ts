import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = '';
  error = '';
  authparams:any;
  constructor(private apiservice:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  login(loginform: NgForm){
    let auth = {"cognito_auth":"true","username":loginform.value.username, "password":loginform.value.password}
    this.apiservice.login(auth).subscribe(
      result => {
      this.authparams = result;
      console.log(this.authparams.AuthenticationResult.AccessToken);
    },
    error => {
      this.error = error;
      console.log(this.error);
    },
    
      
    )
    
  }
}
