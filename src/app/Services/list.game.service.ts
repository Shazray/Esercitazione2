import { GameItem } from "../gameItem";


export class ListGameService{

    private items: GameItem[] = [
    new GameItem('1'),
    new GameItem('2'),
    new GameItem('3', "Counter-Strike","Gioco divertente... ma non troppo", "FPS", 4.5, 11.00, 2014),
    new GameItem('4', "League of Legend","Gioco cancro.", "MOBA", 4, 0, 2012),
    new GameItem('5')];

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