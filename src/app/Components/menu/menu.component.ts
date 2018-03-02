import { Component, OnInit, Output, Input } from '@angular/core';
import { MenuService } from '../../Services/menu.service';
import { MenuItem } from '../../menuItem';
import { MenuEnum } from '../../menuEnum';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { User } from '../../user';
import { LoggedUser } from '../../LoggedUser';

@Component({
  selector: 'app-menu',
  templateUrl: '../../Components/menu/menu.component.html',
  styleUrls: ['../../Components/menu/menu.component.css']
})

export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    new MenuItem(MenuEnum.Home, 'Home', "/home", true),
    new MenuItem(MenuEnum.List, 'Lista', "/list"),
    new MenuItem(MenuEnum.Logout, 'Logout', "/logout")
  ];

  userSelected: string;
  permission: boolean = false;

  constructor(private menuService: MenuService, private loginService: LoginService, private router: Router) { 
    this.permission = (JSON.parse(sessionStorage.getItem("user")) as LoggedUser).isAdmin;
  }

  

  ngOnInit() {

    this.userSelected = sessionStorage.getItem('username');
  }

  
    
  

  selectSection(id: string) {

    this.menuItems.forEach(item => {
      if (id == item.id) {
        item.selected = true;
      }
      else {
        item.selected = false;
      }
    });

    this.menuService.setSelection(id);
  }

  gTFO() {
    this.loginService.doLogout();
    console.log(sessionStorage.getItem('username'));
  }


}