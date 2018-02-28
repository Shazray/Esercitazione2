import { Injectable, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { User } from '../user';

@Injectable()
export class LoginService {

  user: User = new User();


  constructor(private router: Router) { }

  private logged: Subject<boolean> = new Subject<boolean>();

  public sectionSelected$ = this.logged.asObservable();

  public setLogged(): boolean {
    if (sessionStorage.getItem('username') === null) {
      this.logged.next(false);
      return false;
    } else {
      
      this.logged.next(true);
      return true;
    }
  }

  doLogin(username, password) {
    if (username == this.user.username && password == this.user.psw) {

      sessionStorage.setItem('username', username);
      this.logged.next(true);
      this.router.navigate(['/home']);
    }
    else {
      alert("Inserisci i dati corretti deficente!");
    }
  }

  doLogout() {
    sessionStorage.removeItem('username');
    this.logged.next(false);
    this.router.navigate(['/login']);
  }


}