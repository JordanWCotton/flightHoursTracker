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

  onSignUp (form: NgForm) {
    this.auth.signUpUser(form.value)
    .subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  } 

}
