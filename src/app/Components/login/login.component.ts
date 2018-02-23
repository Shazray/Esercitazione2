import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../Services/menu.service';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) { 

  }


  username: string;
  password: string;

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  login(){
    this.loginService.doLogin(this.username, this.password);
  }


}
