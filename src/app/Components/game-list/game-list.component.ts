import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from '../../gameItem';

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {


  @Input()
  items: GameItem[] = [];

  constructor() { }
}
