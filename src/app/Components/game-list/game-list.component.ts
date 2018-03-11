import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetailGameService } from '../../Services/detail-game.service';
import { ListGameService } from '../../Services/list.game.service';
import { Router } from '@angular/router';
import { GameItem } from '../../gameItem';

@Component({
  selector: 'list',
  templateUrl: '../../Components/game-list/game-list.component.html',
  styleUrls: ['../../Components//game-list/game-list.component.css']
})
export class GameListComponent {

  @Input()
  items: GameItem[] = [];

  @Output()
  selectedItem: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router, private listGame: ListGameService, private comunicatorService: DetailGameService) {

  }

  ngOnInit() {
    this.items = this.listGame.getGameItemList();
  }

  
  showData(item: GameItem) {
    this.router.navigate(['/detail/'+item.id]);
}

  

}


