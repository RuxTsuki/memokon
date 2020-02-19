import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { IMenuItems, IAsideSections, ISearchFilters } from './my-zone.interface';
import { MatSidenav } from '@angular/material/sidenav';
import { asideItems } from "./aside-items";
import { SEARCH_FILTERS } from "./search-filters";
import { Router } from '@angular/router';

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

  searchFilters: ISearchFilters[] = SEARCH_FILTERS;

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  @ViewChild('buttonToTop', { static: false }) buttonToTop: ElementRef<HTMLDivElement>;

  itemSelected: IMenuItems = undefined;
  searchFiltered = [];
  searchBar = false;
  searchBarM = false;
  lastItem: string;

  readonly asideSections: IAsideSections[] = asideItems;

  constructor(private router: Router) { }

  ngOnInit() {
    this.onResizeWindow();
  }

  ngAfterViewInit() {
    window.onscroll = () => this.showButtonToTop();
  }

  /* Muestra el boton cuando se ha desplazado hacia abajo */
  showButtonToTop = () => document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ?
    this.buttonToTop.nativeElement.style.display = 'block' : this.buttonToTop.nativeElement.style.display = 'none';

  /** Te lleva al inicio del client Window*/
  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  /** La linea abajo del item en el menu superior se movera dependiento del item selecionado */
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

  /** Cada vez que se resize la pagina. */
  onResizeWindow() {
    window.addEventListener('resize', () => {
      if (this.searchBar && this.isMobile()) { this.searchBarM = true; }
      if (this.searchBarM && !this.isMobile()) { this.searchBarM = false; this.searchBar = true; }
    });
  }

  /**
   * Evento click de cualquier item del aside Menu Section
   * @section `IAsideItems`
   */
  asideClick(itemCode: string) {
    this.searchBar = this.searchBarM = false;
    this.asideSelection(itemCode);
    this.sidenav.toggle();
  }

  /* Redirije a una ruta hija dependiendo del itemcode */
  asideSelection(itemCode: string) {
    switch (itemCode) {
      case '3d':
        this.saveLastAsideItem(itemCode);
        this.router.navigateByUrl('docs/new');
        break;
      case '4s':
        this.router.navigateByUrl('search');
        this.onSearchBar();
        break;
      default:
        break;
    }
  }

  /** Guarda el codigo del ultimo asideItem clickeado */
  saveLastAsideItem = (item: string) => this.lastItem = item;

  /** Al quitar la busqueda vuelve al ultimo AsideItem Selecionado */
  setLastAsideItem = () => this.asideSelection(this.lastItem)

  /** Intercambia la accion del icono Search por buscar o cancelar busqueda y se redirige a la url search */
  onToggleSearch = () => {
    if (this.searchBar || this.searchBarM) {
      this.router.navigateByUrl('');
      this.searchBar = this.searchBarM = false;
      this.setLastAsideItem();
    } else {
      this.router.navigateByUrl('search');
      this.onSearchBar();
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

  /** si la resolucion es Menor a 660 */
  isMobile = () => document.documentElement.clientWidth < 660;

  /** Activa la barra de busqueda si es ta en mobile o en desktop */
  private onSearchBar = () => this.isMobile() ? this.searchBarM = true : this.searchBar = true;
}
