import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetailGameService } from '../../Services/detail-game.service';
import { ListGameService } from '../../Services/list.game.service';
import { Router } from '@angular/router';
import { GameItem } from '../../gameItem';
import { Genere } from '../../genere';
import { ListGenereService } from '../../Services/list.genere.service';

@Component({
  selector: 'list',
  templateUrl: '../../Components/game-list/game-list.component.html',
  styleUrls: ['../../Components//game-list/game-list.component.css']
})

export class GameListComponent {

  items: GameItem[] = [];
  itemsFiltered: GameItem[] = [];
  generes: Genere[];
  value: string;

  @Output()
  selectedItem: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router, private listGame: ListGameService, private comunicatorService: DetailGameService, private listGenereService: ListGenereService) {

  }

  ngOnInit() {
    this.items = this.listGame.getGameItemList();
    this.generes = this.listGenereService.getGeneresList();
    this.itemsFiltered = this.items;
    this.value = 'Tutti';
  }


  goToEdit(item: GameItem) {
    this.router.navigate(['/detail/' + item.id]);
  }

  filter() {
    if (this.value != 'Tutti') {
      this.itemsFiltered = [];
      for (let game of this.items) {
        if (this.listGenereService.getGenereById(game.genere.id).descrizione == this.value) {
          this.itemsFiltered.push(game);
        }
      }
    } else {
      this.itemsFiltered = this.items;
    }

  }





}


