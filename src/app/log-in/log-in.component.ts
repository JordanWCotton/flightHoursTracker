import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators, NG_VALIDATORS } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;
  
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  user = {
    email: 'Jordancotton55@gmail.com',
    password: 'Password'
  }

  onSignin(form: NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;
    this.router.navigate(['/main-menu']);
    /* this.auth.signinUser(this.user)
    .subscribe(
      (res) => console.log(res)
    ); */
    
  }
}
