import { NgModule } from "@angular/core";
import { HomeComponent } from "../home/home-component.component";
import { RouterModule, Routes } from "@angular/router";
import { GameListComponent } from "../game-list/game-list.component";
import { GameDetailComponent } from "../game-detail/game-detail.component";
import { EditGameComponent } from "../edit-game/edit-game.component";
import { LoginComponent } from "../login/login.component";
import { AuthGuard } from "../../Services/authguard.service";
import { LogoutComponent } from "../logout/logout.component";


const routes: Routes = [

    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
    { path: "list", component: GameListComponent, canActivate: [AuthGuard] },
    { path: "detail/:id", component: GameDetailComponent, canActivate: [AuthGuard] },
    { path: "app-edit", component: EditGameComponent, resolve:[AuthGuard] },
    { path: "logout", component: LogoutComponent, canActivate: [AuthGuard] }
    
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],

    exports: [
        RouterModule
    ]
})
export class DemoRoutingModule { }
