import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  user = {
    name: 'Jordan', 
    email: 'Jordancotton55@gmail.com',
    password: 'Password'
  }

  onSignup (form) {
    this.auth.signUpUser(this.user)
    .subscribe(
      (res) => console.log(res)
    );
  }

}
