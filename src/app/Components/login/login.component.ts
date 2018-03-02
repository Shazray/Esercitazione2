import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../Services/menu.service';
import { LoginService } from '../../Services/login.service';
import { User } from '../../user';
import { LoggedUser } from '../../LoggedUser';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  permission: boolean = false;
  user: User = new User("","");

  constructor(private router: Router, private loginService: LoginService) {

  }


  ngOnInit() {
  }

  ngOnDestroy() {
  }

  login() {
    this.loginService.doLogin(this.user);

  }


}
