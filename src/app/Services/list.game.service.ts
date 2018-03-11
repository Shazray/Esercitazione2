import { GameItem } from "../gameItem";



export class ListGameService{

    
   private items: GameItem[] = [ new GameItem("01", "Quake", "L'unico vero gioco", "FPS ARENA", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("02", "Halo", "Mah", "FPS", "9/10 IGN", 99.99, "01/01/1999","XBOX"),
    new GameItem("03", "Bloodborn", "Capolavoro di ignoranza", "Souls like", "10/10 IGN", 99.99, "01/01/1999", "PS4"),
    new GameItem("04", "CS:GO", "La tristezza", "FPS", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("05", "DOTA", "Bello il primo, il secondo circa", "MOBA", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("06", "Warcraft", "WoW", "RTS", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("07", "Sacred", "E pathfinder muto", "Hack'n'slash", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("08", "Sea of Thieves", "You are a pirate", "MMO", "10/10 IGN", 99.99, "01/01/1999","XBOX"),
    new GameItem("09", "Slay the Spire", "E slayamola sta spira", "ROGUELIKE", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("10", "Civilization VI", "100 ne inizi, 0 ne finisci", "STRATEGY", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("11", "Quake", "L'unico vero gioco", "FPS ARENA", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("12", "Halo", "Mah", "FPS", "9/10 IGN", 99.99, "01/01/1999","XBOX"),
    new GameItem("13", "Bloodborn", "Capolavoro di ignoranza", "Souls like", "10/10 IGN", 99.99, "01/01/1999", "PS4"),
    new GameItem("14", "CS:GO", "La tristezza", "FPS", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("15", "DOTA", "Bello il primo, il secondo circa", "MOBA", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("16", "Warcraft", "WoW", "RTS", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("17", "Sacred", "E pathfinder muto", "Hack'n'slash", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("18", "Sea of Thieves", "You are a pirate", "MMO", "10/10 IGN", 99.99, "01/01/1999","XBOX"),
    new GameItem("19", "Slay the Spire", "E slayamola sta spira", "ROGUELIKE", "10/10 IGN", 99.99, "01/01/1999"),
    new GameItem("20", "Civilization VI", "100 ne inizi, 0 ne finisci", "STRATEGY", "10/10 IGN", 99.99, "01/01/1999")];

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

    

}