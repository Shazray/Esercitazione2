import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from '../../gameItem';
import { DetailGameService } from '../../Services/detail-game.service';
import { ListGameService } from '../../Services/list.game.service';

@Component({
  selector: 'app-detail',
  templateUrl: '../../Components/game-detail/game-detail.component.html',
})
export class GameDetailComponent{

  @Input()
  IdSelected: string;
  currentGame: GameItem;

  constructor(private listService: ListGameService) {
  }

  ngOnInit() {
    this.currentGame = this.listService.getGameById(this.IdSelected);
  }
}
