import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators, NG_VALIDATORS } from '@angular/forms';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;
  
  constructor() { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    console.log(form);
    this.email = form.value.email;
    this.password = form.value.password;
    console.log(this.email, this.password);
  }

}
