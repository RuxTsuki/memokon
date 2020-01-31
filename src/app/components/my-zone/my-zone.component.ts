import { Component, OnInit, ElementRef, TemplateRef } from '@angular/core';
import { IMenuItems } from './my-zone.interface';

@Component({
  selector: 'app-my-zone',
  templateUrl: './my-zone.component.html',
  styleUrls: ['./my-zone.component.scss']
})
export class MyZoneComponent implements OnInit {

  itemsNav: IMenuItems[] = [
    {
      name: 'Dashboard',
      state: true
    },
    { name: 'Workflow' },
    { name: 'Explore' },
    { name: 'More' }
  ];

  itemSelected: IMenuItems = undefined;

  constructor() { }

  ngOnInit() {
  }



  ItemSelected(itemNav: IMenuItems) {
    if (!itemNav) return;
    const lineIndex = this.itemsNav.findIndex(item => item.name === itemNav.name);
    let moveLineNav = 0;
    switch (lineIndex) {
      case 0: moveLineNav = 0; break;
      case 1: moveLineNav = 25; break;
      case 2: moveLineNav = 50; break;
      case 3: moveLineNav = 75; break;
      default:
        break;
    }
    document.getElementsByClassName('line-nav')[0].setAttribute('style', `margin-left: ${moveLineNav}%`);
  }

}
