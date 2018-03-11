import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private loginservice: LoginService, private router: Router) { }

    canActivate() {

        if (sessionStorage.getItem("user")) {
            console.log('Loggato');
            return true;
        } else {
            this.router.navigate(["/login"]);
            console.log('Non loggato');
            return false;
        }

    }

    resolve(){

            if (JSON.parse(sessionStorage.getItem("user")).username == "user" ) {
                this.router.navigate(["/home"]);
                console.log('Loggato');
                return true;
            } 
            if (JSON.parse(sessionStorage.getItem("user")).username == "admin")
            {
               return false;             
            }
                else {
                this.router.navigate(["/login"]);
                console.log('Non loggato');
                return false;
            }
    
        }
    
}