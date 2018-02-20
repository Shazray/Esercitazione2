export class GameItem {
    id: string;
    name: string;
    descrizione: string;
    genere: string;
    rating: number;
    prezzo: number;
    annoUscita: number;
    
    constructor(id: string = "", name: string = "Game", descrizione: string = "asdiasdiasdj", genere: string = "Adventure", rating: number = 4.5, prezzo = 30, annoUscita: number= 2018) {
        this.id =id ;
        this.name = name; 
        this.descrizione = descrizione;
        this.genere = genere;
        this.rating = rating;
        this.prezzo = prezzo;
        this.annoUscita = annoUscita;
    }
}