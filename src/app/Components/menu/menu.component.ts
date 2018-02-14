import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../Services/menu.service';
import { MenuItem } from '../../menuItem';
import { MenuEnum } from '../../menuEnum';

@Component({
  selector: 'app-menu',
  templateUrl: '../../Components/menu/menu.component.html',
  styleUrls: ['../../Components/menu/menu.component.css']
})

export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    new MenuItem(MenuEnum.Home, 'Home', true),
    new MenuItem(MenuEnum.List, 'Lista'),
    new MenuItem(MenuEnum.Detail, 'Dettaglio'),
    new MenuItem(MenuEnum.Edit, 'Modifica')
  ];
  constructor(private menuService: MenuService) {}

  ngOnInit() {
  }

  selectSection(id:string){

    this.menuItems.forEach(item => {
      if(id == item.id){
        item.selected = true;
      }else{
        item.selected = false;
      }
    });

    this.menuService.setSelection(id);
  }

}


