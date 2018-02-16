import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GameItem } from '../gameItem';

@Injectable()
export class DetailGameService {

  private mySubject = new Subject<GameItem>();
  
  public mySubject$ = this.mySubject.asObservable();
    
  changeSubject(value: GameItem)
   { 
     this.mySubject.next(value);
    }
}
