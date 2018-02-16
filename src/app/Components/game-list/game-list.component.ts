import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private comunicatorService: DetailGameService) {
    let lista: ListGameService = new ListGameService();
    this.items = lista.getGameItemList();
  }
  ngOnInit() {
    this.items.push(new GameItem());
  }

  selectItem(item: GameItem) {
    // chiamo il net nel subject
    this.comunicatorService.changeSubject(item);
  }
}


