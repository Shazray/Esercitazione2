import { NgModule } from "@angular/core";
import { HomeComponent } from "../home/home-component.component";
import { RouterModule, Routes } from "@angular/router";
import { GameListComponent } from "../game-list/game-list.component";
import { GameDetailComponent } from "../game-detail/game-detail.component";

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "app-list", component: GameListComponent},
    {path: "detail/:id", component: GameDetailComponent},
    {path: "", redirectTo: "home", pathMatch: "full"}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],

    exports: [
        RouterModule
    ]
})
export class DemoRoutingModule{}