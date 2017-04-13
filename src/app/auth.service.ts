import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class AuthService { 
  private token: string;
  constructor(private router: Router, private http: Http) {}

  signinUser (user) {
    return this.http.post('/app/login', user);
  }

  signUpUser (user) {
    return this.http.post('/app/register', user)
  }

  getUserToken () {
   
  }

  isAuthenticated () {
    
  }

  onLogout () {
    this.router.navigate(['/']);
  }

}

