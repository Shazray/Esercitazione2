import { Component } from '@angular/core';
import { GameItem } from './gameItem';
import { ListGameService } from './list.game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sito gaming';
  items: GameItem[] = [];


  constructor(private listService: ListGameService){

    this.items = listService.getGameItemList();
  }

}
