import { GameItem } from "../gameItem";


export class ListGameService{

    getGameItemList(): GameItem[] {
        let items: GameItem[] = [];
        items.push(new GameItem(1));
        items.push(new GameItem(2));
        items.push(new GameItem(3, "Counter-Strike","Gioco divertente... ma non troppo", "FPS", 4.5, 11.00, 2014));
        items.push(new GameItem(4, "League of Legend","Gioco cancro.", "MOBA", 4, 0, 2012));
        items.push(new GameItem(5));
        return items;

    }

}