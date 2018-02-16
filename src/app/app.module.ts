import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameListComponent } from './Components/game-list/game-list.component';
import { GameDetailComponent } from './Components/game-detail/game-detail.component';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MenuService } from './Services/menu.service';
import { ListGameService } from './Services/list.game.service';
import { EditGameComponent } from './Components/edit-game/edit-game.component';
import { DetailGameService } from './Services/detail-game.service';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailComponent,
    HomeComponentComponent,
    MenuComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MenuService, ListGameService, DetailGameService],
  bootstrap: [AppComponent]
})
export class AppModule {}
