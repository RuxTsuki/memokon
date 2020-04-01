import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { IMenuItems, IAsideSections, ISearchFilters } from './my-zone.interface';
import { MatSidenav } from '@angular/material/sidenav';
import { asideSections, asideItems } from "./aside-items";
import { SEARCH_FILTERS } from "./search-filters";
import { Router, NavigationEnd, Navigation } from '@angular/router';
import { ThemingService } from 'src/app/theme/theming.service';
import { MyZoneService } from './my-zone.service';
import { AsideNavComponent } from './aside-nav/aside-nav.component';

@Component({
  selector: 'app-my-zone',
  templateUrl: './my-zone.component.html',
  styleUrls: ['./my-zone.component.scss']
})
export class MyZoneComponent implements OnInit, AfterViewInit {

  itemsNav: IMenuItems[] = [
    {
      name: 'Workflow',
      state: true
    },
    {
      name: 'Workspace'
    },
    { name: 'Explore' },
    { name: 'More' }
  ];

  @ViewChild('buttonToTop') buttonToTop: ElementRef<HTMLDivElement>;
  @ViewChild('cAsideNav', { static: true }) cAsideNav: AsideNavComponent;

  searchFilters: ISearchFilters[] = SEARCH_FILTERS;
  itemSelected: IMenuItems = undefined;
  searchFiltered = [];
  searchBar = false;
  lastItem: string;
  nameLastItem: string = '';

  _darkTheme = false;

  asideSections: IAsideSections[] = asideSections;

  constructor(private router: Router, private themeS: ThemingService, public myZoneS: MyZoneService) {
    this.router.events.subscribe((c: any) => {
      if (c && c.urlAfterRedirects && !c.state && c.url && c.url !== '/') {
        this.myZoneS.urlMain = (c.url);
      }
    })

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.onscroll = () => this.showButtonToTop();
  }

  /* Muestra el boton ir arriba cuando se ha desplazado 20px hacia abajo */
  showButtonToTop = () => document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ?
    this.buttonToTop.nativeElement.style.display = 'block' : this.buttonToTop.nativeElement.style.display = 'none';

  /** Lleva al inicio del client Window */
  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  /**  La linea abajo del item en el menu superior se movera dependiento del item selecionado */
  itemTopSelected(itemNav: IMenuItems) {
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

  /** intercambia el valor de searchBar y hace un ruteo */
  onToggleSearch = () => {
    if (this.searchBar) {
      this.router.navigateByUrl('');
      this.cAsideNav.disableItemsActive();
      this.cAsideNav.setLastAsideItem();
    } else {
      this.router.navigateByUrl('search');
    }
    this.searchBar = !this.searchBar;
  }

  // deben ir en otro lado

  toggleTheme() {
    this._darkTheme = !this._darkTheme;
    this._darkTheme ? this.themeS.setDarkTheme() : this.themeS.setLightTheme();
  }
  /** si la resolucion es Menor a 660 */
  isMobile = () => document.documentElement.clientWidth < 660;
}
