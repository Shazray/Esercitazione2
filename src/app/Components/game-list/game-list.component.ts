import { Component, OnInit, Input } from '@angular/core';
import { ListGameService } from '../../Services/list.game.service';
import { GameItem } from '../../gameItem';

@Component({
  selector: 'app-list',
  templateUrl: '../../Components/game-list/game-list.component.html',
})
export class GameListComponent {
  
  @Input()
  items: GameItem[] = [];


  constructor(private listService: ListGameService){

    this.items = listService.getGameItemList();
}
}
