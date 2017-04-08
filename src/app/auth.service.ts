import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() {}

  signinUser (email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then (
      response => console.log(response),
      error => console.log(error)
    )
  }

}
