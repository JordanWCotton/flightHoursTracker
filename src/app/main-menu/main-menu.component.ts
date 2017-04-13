import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';  

@Component({ 
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() { 
  }

  onLogout() {
    this.auth.onLogout();
  }

}
