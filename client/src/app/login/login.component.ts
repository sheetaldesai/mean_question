import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {username: ""}
  constructor(private _dataService : DataService,
              private _router: Router) { }

  ngOnInit() {
    
  }

  onLogin() {
    console.log("login clicked name:", this.login.username );
    this._dataService.setLogin(this.login.username);
    this._router.navigate(['/dashboard']);
  }

}
