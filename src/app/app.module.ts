import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameListComponent } from './Components/game-list/game-list.component';
import { GameDetailComponent } from './Components/game-detail/game-detail.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MenuService } from './Services/menu.service';
import { ListGameService } from './Services/list.game.service';
import { EditGameComponent } from './Components/edit-game/edit-game.component';
import { DetailGameService } from './Services/detail-game.service';
import { DemoRoutingModule } from './Components/router/router.module';
import { HomeComponent } from './Components/home/home-component.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginService } from './Services/login.service';
import { AuthGuard } from './Services/authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailComponent,
    HomeComponent,
    MenuComponent,
    EditGameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoRoutingModule
  ],
  providers: [MenuService, ListGameService, DetailGameService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
