import { Genere } from "../genere";

export class ListGenereService
{

    private generes: Genere[] = [new Genere("01", "Action RPG"),
    new Genere("02", "MOBA"),
    new Genere("03", "Macchinine"),
    new Genere("04", "Pirates"),
    new Genere("05", "FPS")];

    getGenereById(id:string){
        for(let genere of this.generes){
            if(id==genere.id)
            {
                return genere;
            }
        }
        return null;
   }


}