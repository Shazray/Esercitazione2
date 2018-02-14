import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { ListGameService } from './list.game.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    GameListComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
