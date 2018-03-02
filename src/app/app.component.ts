import { Component, ViewChild } from '@angular/core';
import { MenuEnum } from './menuEnum';
import { MenuService } from './Services/menu.service';
import { DetailGameService } from './Services/detail-game.service';
import { GameItem } from './gameItem';
import { GameListComponent } from './Components/game-list/game-list.component';
import { LoginService } from './Services/login.service';
import { LoggedUser } from './LoggedUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedUser: LoggedUser = null;
  currentSection = MenuEnum.Home;
  gameSelected: string;

  constructor(private menuService: MenuService, private comunicatorService: DetailGameService, private loginService: LoginService) {
    this.loggedUser = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) as LoggedUser : null;
    
    this.menuService.sectionSelected$.subscribe(id => {
      this.currentSection = id;

      comunicatorService.mySubject$.subscribe((newValue: GameItem) => {

      });
    });
    
    this.loginService.sectionSelected$.subscribe((loggedUser: LoggedUser) =>{
      this.loggedUser = loggedUser;
     // prima del ? c'è l'if dopo c'è la condizione di true...dopo i due punti c'è l'else
    })

    
  }

  currentGame(item: string){
    this.gameSelected = item;
  }

  showData(id){
    this.gameSelected = id;
    this.menuService.setSelection("dettaglio");
  }
  


}




