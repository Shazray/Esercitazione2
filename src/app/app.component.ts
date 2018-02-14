import { Component } from '@angular/core';
import { MenuEnum } from './menuEnum';
import { MenuService } from './Services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection = MenuEnum.Home;

  constructor(private menuService: MenuService){
    this.menuService.sectionSelected$.subscribe(id=>{
      this.currentSection = id;
    });
  }

}
