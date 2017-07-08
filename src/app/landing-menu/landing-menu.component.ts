import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, NgForm, Validators, NG_VALIDATORS } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service'; 

@Component({ 
  selector: 'app-landing-menu', 
  templateUrl: './landing-menu.component.html',
  styleUrls: ['./landing-menu.component.css']
})
export class LandingMenuComponent implements OnInit {
  //Bind an element to a local variable
  @ViewChild('openModal') openModal:ElementRef;
  email: string;
  password: string;
  
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() { 
  } 

  onSignIn(form: NgForm) {
    this.auth.signinUser(form.value)
    .subscribe( 
      (res) => {
        let validation = res.json();
        if (validation.key === true) {
          this.router.navigate(['/main-menu']);
          this.auth.userSignIn();
        } else {
          this.openModal.nativeElement.click();
        }
      }
    );  
  }
}