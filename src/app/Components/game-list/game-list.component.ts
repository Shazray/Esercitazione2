import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameItem } from '../../gameItem';
import { DetailGameService } from '../../Services/detail-game.service';
import { ListGameService } from '../../Services/list.game.service';

@Component({
  selector: 'app-list',
  templateUrl: '../../Components/game-list/game-list.component.html',
  styleUrls: ['../../Components//game-list/game-list.component.css']
})
export class GameListComponent {

  @Input()
  items: GameItem[] = [];

  @Output()
  selectedItem: EventEmitter<string> = new EventEmitter();

  constructor(private listGame: ListGameService, private comunicatorService: DetailGameService) {

    this.items = listGame.getGameItemList();
  }

  ngOnInit() {
    //this.items.push(new GameItem());
  }

  
  showData(item: GameItem) {
    this.selectedItem.emit(item.id);
}

  

}


