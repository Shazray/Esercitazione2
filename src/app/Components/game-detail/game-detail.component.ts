import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../gameItem';
import { DetailGameService } from '../../Services/detail-game.service';

@Component({
  selector: 'app-detail',
  templateUrl: '../../Components/game-detail/game-detail.component.html',
})
export class GameDetailComponent{
  currentCharacter: GameItem;

  constructor(private comunicatorService: DetailGameService) {

    comunicatorService.mySubject$.subscribe( (newValue: GameItem) => {

      this.currentCharacter = newValue;

    });

  }
}
