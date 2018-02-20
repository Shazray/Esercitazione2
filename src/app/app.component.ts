import { Component, ViewChild } from '@angular/core';
import { MenuEnum } from './menuEnum';
import { MenuService } from './Services/menu.service';
import { DetailGameService } from './Services/detail-game.service';
import { GameItem } from './gameItem';
import { GameListComponent } from './Components/game-list/game-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  currentSection = MenuEnum.Home;
  gameSelected: string;

  constructor(private menuService: MenuService, private comunicatorService: DetailGameService) {
    this.menuService.sectionSelected$.subscribe(id => {
      this.currentSection = id;

      comunicatorService.mySubject$.subscribe((newValue: GameItem) => {

      });
    });
  }

  currentGame(item: string){
    this.gameSelected = item;
  }

  showData(id){
    this.gameSelected = id;
    this.menuService.setSelection("dettaglio");
  }


}




