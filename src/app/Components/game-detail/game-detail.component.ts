import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from '../../gameItem';
import { DetailGameService } from '../../Services/detail-game.service';
import { ListGameService } from '../../Services/list.game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: '../../Components/game-detail/game-detail.component.html',
})
export class GameDetailComponent{

  @Input()
  IdSelected: string;
  currentGame1: GameItem;

  constructor(private route: ActivatedRoute, private listService: ListGameService) {
    this.route.params.subscribe(params => {
      if(params['id'] != '' &&  params ['id'] != null )
      {
        this.currentGame1 = this.listService.getGameById(params ['id']);
      }
    })

  }

  ngOnInit() {
  }
}
