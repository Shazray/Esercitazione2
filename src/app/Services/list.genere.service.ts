import { Genere } from "../genere";
import { Injectable } from '@angular/core';

@Injectable()
export class ListGenereService {


  constructor() { }

  private generes: Genere[] = [
  new Genere("01", "Action RPG"),
  new Genere("02", "MOBA"),
  new Genere("03", "Macchinine"),
  new Genere("04", "Pirates"),
  new Genere("05", "FPS")];


  getGeneresList(): Genere[] {
    return this.generes;
  }

  getGenereById(value: string): Genere {
    for (let genere of this.generes) {
      if (value == genere.id) {
        return genere.clone();
      }
    }
  }

  getDescriptionById(value: string): string {
    for (let genere of this.generes) {
      if (value == genere.id) {
        return genere.descrizione;
      }
    }
  }

}