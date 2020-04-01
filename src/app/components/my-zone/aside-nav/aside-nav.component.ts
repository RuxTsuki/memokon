import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MyZoneService } from '../my-zone.service';
import { Router } from '@angular/router';
import { asideItems, asideSections } from '../aside-items';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  @Output() searchBar = new EventEmitter;
  @Output() lastItem = new EventEmitter;
  onSearchbar = false;

  constructor(public myZoneS: MyZoneService, private router: Router) {
    this.myZoneS._urlMain.subscribe(c => {
      this.setNameActive(c, 'url');
    })

  }

  ngOnInit(): void {
  }

  /** Cada vez que se clickea un item del aside */
  asideClick(itemCode: string) {
    this.searchBar.emit(false);
    this.asideSelection(itemCode);
    this.sidenav.toggle();
  }

  /* Redirije a una ruta hija dependiendo del itemcode y lo activa */
  asideSelection(itemCode: string) {
    switch (itemCode) {
      case '3d':
        this.saveLastAsideItem(itemCode);
        this.router.navigateByUrl('docs');
        break;
      case '3nm':
        this.saveLastAsideItem(itemCode);
        this.router.navigateByUrl('notes');
        break;
      case '4s':
        this.searchBar.emit(false);
        this.router.navigateByUrl('search');
        break;
      default:
        console.log('Esto es el inicio')
        break;
    }
    this.itemActive(itemCode);
  }

  /** recorre los itemAside y los desactiva (ponse su estado en false) */
  disableItemsActive() {
    asideSections.forEach(section => section.items.forEach(item => item.state ? item.state = false : null));
  }

  /** Al quitar la busqueda vuelve al ultimo AsideItem Selecionado si hubo */
  setLastAsideItem = () => this.asideSelection(this.myZoneS.lastItem);

  /** Guarda el codigo del ultimo asideItem clickeado */
  saveLastAsideItem = (item: string) => {
    this.setNameActive(item, 'code');
    this.myZoneS.lastItem = item;
  };

  /** Busca el @itemCode en la lista de asideItem y lo activa (pone su estado en true) */
  itemActive(itemCode: string) {
    if (!itemCode) {
      return;
    }
    asideSections.forEach(section => {
      section.items.forEach(item => {
        item.state ? item.state = false : null;
        item.itemCode === itemCode ? item.state = true : null;
      })
    })
  }

  /** busca y activa el item que coincida, tambien setea el nombre del ultimo AsideItem */
  setNameActive = (codeSearch: string, opts: string) => {
    if (!codeSearch) {
      return;
    }
    if (codeSearch === '/search') {
      this.searchBar.emit(true);
      this.itemActive(asideItems.find(c => c.urlName === codeSearch).itemCode);
      return;
    }
    switch (opts) {
      case 'url':
        const itemActive = asideItems.find(c => c.urlName === codeSearch);
        this.myZoneS.nameLastItem = itemActive?.name;
        this.myZoneS.lastItem = itemActive.itemCode;
        this.itemActive(itemActive.itemCode);
        break;
      case 'code':
        this.myZoneS.nameLastItem = asideItems.find(c => c.itemCode === codeSearch)?.name;
        break;
      default:
        break;
    }

  }

  /** Abre o cierra el aside menu, agrega una clase para abrir el menu */
  onToggleAside = () => {
    this.sidenav.toggle();
    document.querySelector('mat-sidenav-container').classList.toggle('show-aside');
  }

  /** Add or remove al abrir o cerrar el Aside Menu */
  closeAside = () => {
    document.querySelector('mat-sidenav-container').classList.remove('show-aside');
    document.body.style.overflow = '';
  }
  openAside = () => {
    document.querySelector('mat-sidenav-container').classList.add('show-aside');
    document.body.style.overflow = 'hidden';
  }

}
