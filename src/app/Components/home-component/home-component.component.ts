import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../../Components/home-component/home-component.component.html',
  styleUrls: ['../../Components/home-component/home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  title: string = "Sito Gaming";
  constructor() { }

  ngOnInit() {
  }

}
