import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-zone',
  templateUrl: './my-zone.component.html',
  styleUrls: ['./my-zone.component.scss']
})
export class MyZoneComponent implements OnInit {

  itemsNav = [
    'Dashboard',
    'Workflow',
    'Explore',
    'More'
  ];
  constructor() { }

  ngOnInit() {
  }

}
