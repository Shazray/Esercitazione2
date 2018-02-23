import { Injectable, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { User } from '../login';

@Injectable()
export class LoginService {

  user: User = new User();
  

  constructor(private router: Router) { }

  private logged: Subject<boolean> = new Subject<boolean>();

  public sectionSelected$ = this.logged.asObservable();

  public setLogged(id: boolean) {
    this.logged.next(id);
  }


  doLogin(username, password) {
    if (username == this.user.username && password == this.user.psw) {

      this.setLogged(true);
      this.router.navigate(['/home']);
    }
    else {
      console.log("roba");
    }
  }

  doLogout() {
    this.setLogged(false);
    this.router.navigate(['/login']);
  }


}