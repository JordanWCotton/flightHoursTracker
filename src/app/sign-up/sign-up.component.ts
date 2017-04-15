import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { AuthService } from '../auth.service';
 
@Component({ 
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('openModal') openModal:ElementRef;

  constructor(private auth: AuthService) {}

  ngOnInit() {
  } 

  onSignUp (form: NgForm) {
    this.auth.signUpUser(form.value)
    .subscribe(
      (res: Response) => {
        if (res.status == 200) {
          this.openModal.nativeElement.click();
        }
      },
      (err) => console.log(err)
    );
  } 

}
