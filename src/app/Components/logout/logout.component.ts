import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'logout',
  templateUrl: '../../Components/logout/logout.component.html',
  styleUrls: ['../../Components/logout/logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  gtfo()
  {
    this.loginService.doLogout();
  }

  ngOnInit() {
  }

}
