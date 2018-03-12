import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from '../../gameItem';
import { DetailGameService } from '../../Services/detail-game.service';
import { ListGameService } from '../../Services/list.game.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Genere } from '../../genere';
import { ListGenereService } from '../../Services/list.genere.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent {

  currentGame: GameItem;
  generes: Genere[];
  search: string;
  exist: boolean = false;
  error: boolean;
  loadedFromDetailPage: boolean = false;

  constructor(private listGameService: ListGameService, private route: ActivatedRoute, private listGenereService: ListGenereService, private router: Router) {

    this.route.params.subscribe(params => {
      if (params['id'] != '' && params['id'] != null) {
        this.currentGame = this.listGameService.getGameById(params['id']);
        this.loadedFromDetailPage = true;
      }
      else {
        this.loadedFromDetailPage = false;
      }
    })

  }

  ngOnInit() {

    if (this.loadedFromDetailPage && this.currentGame && this.currentGame.nome != "") {
      this.search = this.currentGame.nome;
      this.exist = true;
    }
    this.generes = this.listGenereService.getGeneresList();
  }


  searchItem() {
    if (this.search != "") {
      this.currentGame = this.listGameService.lookingFor(this.search);
    }
    if (this.currentGame != null) {
      this.exist = true;
      this.error = false;
    }
    else {
      this.exist = false;
      this.error = true;
    }
  }

  editItem() {
    this.listGameService.editGame(this.currentGame);
    alert("modifiche applicate correttamente");
    this.goToDetail();

  }
  
  goToDetail() {
    this.router.navigate[('/detail/' + this.currentGame.id)];
  }










}
