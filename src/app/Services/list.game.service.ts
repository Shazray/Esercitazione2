
import { ListGenereService } from "./list.genere.service";
import { GameItem } from "../gameItem";
import { Genere } from "../genere";
import { Injectable } from "@angular/core";


@Injectable()
export class ListGameService{



    private items: GameItem[] = [new GameItem("01", "Quake", this.listGenereService.getGenereById("05"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("02", "Halo", this.listGenereService.getGenereById("05"), "9/10 IGN", 99.99, "01/01/1999","XBOX"),
    new GameItem("03", "Bloodborn", this.listGenereService.getGenereById("03"), "10/10 IGN", 99.99, "01/01/1999", "PS4"),
    new GameItem("04", "CS:GO",  this.listGenereService.getGenereById("05"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("05", "DOTA", this.listGenereService.getGenereById("02"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("06", "Warcraft",this.listGenereService.getGenereById("04"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("07", "Sacred",  this.listGenereService.getGenereById("03"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("08", "Sea of Thieves", this.listGenereService.getGenereById("01"), "10/10 IGN", 99.99, "01/01/1999","XBOX"),
    new GameItem("09", "Slay the Spire", this.listGenereService.getGenereById("03"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("10", "Civilization VI", this.listGenereService.getGenereById("03"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("11", "Quake", this.listGenereService.getGenereById("01"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("12", "Halo", this.listGenereService.getGenereById("03"), "9/10 IGN", 99.99, "01/01/1999","XBOX"),
    new GameItem("13", "Bloodborn",this.listGenereService.getGenereById("05") ,"10/10 IGN", 99.99, "01/01/1999", "PS4"),
    new GameItem("14", "CS:GO", this.listGenereService.getGenereById("03"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("15", "DOTA", this.listGenereService.getGenereById("03"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("16", "Warcraft",this.listGenereService.getGenereById("03"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("17", "Sacred", this.listGenereService.getGenereById("03"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("18", "Sea of Thieves",  this.listGenereService.getGenereById("03"), "10/10 IGN", 99.99, "01/01/1999","XBOX"),
    new GameItem("19", "Slay the Spire", this.listGenereService.getGenereById("03"), "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("20", "Civilization VI", this.listGenereService.getGenereById("03"), "10/10 IGN", 99.99, "01/01/1999")];

    
    constructor(private listGenereService: ListGenereService){
    }
    
    getGameItemList(): GameItem[] {
        
        return this.items;

    }

    getGameById(id:string){
        for(let item of this.items){
            if(id==item.id)
            {
                return item;
            }
        }
        return null;
   }

   editGame(modifiedGame: GameItem) {
    for (let item of this.items) {
      if (modifiedGame.id == item.id) {
        item = modifiedGame;
        console.log(item);
      }
    }
  }

  lookingFor(cercato: string): GameItem {

    for (let item of this.items) {
        if (item.nome.toLowerCase() === cercato.toLocaleLowerCase()) {
            let trovato = true;
            let currentGame = this.getGameById(item.id);

            return currentGame;
        }
    }
    return null;


}


    

}