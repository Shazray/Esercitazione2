import { Component, ViewChild } from '@angular/core';
import { MenuEnum } from './menuEnum';
import { MenuService } from './Services/menu.service';
import { DetailGameService } from './Services/detail-game.service';
import { GameItem } from './gameItem';
import { GameListComponent } from './Components/game-list/game-list.component';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged: boolean = false;
  currentSection = MenuEnum.Home;
  gameSelected: string;

  constructor(private menuService: MenuService, private comunicatorService: DetailGameService, private loginService: LoginService) {
    this.menuService.sectionSelected$.subscribe(id => {
      this.currentSection = id;

      comunicatorService.mySubject$.subscribe((newValue: GameItem) => {

      });
    });
    
    this.loginService.sectionSelected$.subscribe(logged =>{
      this.logged = logged; // prima del ? c'è l'if dopo c'è la condizione di true...dopo i : c'è l'else
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




