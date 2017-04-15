import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
  
@Injectable()
export class AuthService { 
  private token = false;

  constructor(private router: Router, private http: Http) {}

  signinUser (user) {
    return this.http.post('/app/login', user);
  }

  userSignIn () {
    this.token = true;
  }

  isSignedIn() {
    return this.token;
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
    this.token = false;
  }

}

