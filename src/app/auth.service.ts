import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService { 
  private token: string;
  constructor(private router: Router) {}

  signinUser (email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then (
      (response) => {
        console.log(response);
        firebase.auth().currentUser.getToken()
        .then(
          (token: string) => this.token = token
          
        );
        this.router.navigate(['/main-menu']);
      }
    )
    .catch (
      error => console.log(error)
    );
  }

  getUserToken () {
    firebase.auth().currentUser.getToken()
    .then(
      (token: string) => this.token = token
    );
    return this.token;
  }

  isAuthenticated () {
    return this.token != null;
  }

  onLogout () {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

}
