import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { GameListComponent } from './game-list/game-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
