import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '../../Components/home/home-component.component.html',
  styleUrls: ['../../Components/home/home-component.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "Sito Gaming";
  constructor() { }

  ngOnInit() {
  }

}
