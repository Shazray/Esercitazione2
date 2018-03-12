import { Genere } from "./genere";

export class GameItem{
    id: string;
    nome: string;
    genere: Genere;
    rating: string;    
    prezzo: number;
    annoUscita: string;
    consoleType: string;

    constructor(id: string = "", nome: string = "", genere: Genere = null, rating: string = "", prezzo: number = undefined,annoUscita: string = "",consoleType: string = "PC"){
        this.id=id;
        this.nome=nome;
        this.genere = genere;
        this.rating = rating;    
        this.prezzo = prezzo;
        this.annoUscita = annoUscita;
        this.consoleType = consoleType;
    }
    
}