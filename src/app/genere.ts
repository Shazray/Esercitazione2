export class Genere{
    id: string;
    descrizione: string;

    constructor(id: string = "", descrizione: string = ""){
        this.id=id;
        this.descrizione=descrizione;
    }
    
public getId():string{
    return this.id;
}

setId(id:string){
    this.id = id;
}

public getDescrizione():string{
    return this.descrizione;
}


setDescrizione(descrizione:string){
    this.descrizione = descrizione;
}


}