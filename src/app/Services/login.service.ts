import { Injectable, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoggedUser } from '../LoggedUser';

@Injectable()
export class LoginService {

  user: User = new User();
  admin: User = new User("admin", "admin");


  constructor(private router: Router) { }

  private logged: Subject<LoggedUser> = new Subject<LoggedUser>();

  public sectionSelected$ = this.logged.asObservable();

  public setLogged(item: LoggedUser){
    this.logged.next(item);
  }

  doLogin(userToCheck: User) {
    if(!userToCheck){
      alert("Inserisci i dati corretti deficente!");
      return;
    }
    if(userToCheck.isEquals(this.user) || userToCheck.isEquals(this.admin)){
      
      let userLogged = new LoggedUser(userToCheck.username, userToCheck.isEquals(this.admin));
      
      sessionStorage.setItem('user', JSON.stringify(userLogged));
      this.setLogged(userLogged);
      this.router.navigate(['/home']);
    }else{
      alert("Inserisci i dati corretti deficente!");
    }
  }

  doLogout() {
    sessionStorage.removeItem('user');
    this.setLogged(null);
    this.router.navigate(['/login']);
  }


}