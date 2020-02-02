import { Component, OnInit, ElementRef, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { IMenuItems } from './my-zone.interface';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-my-zone',
  templateUrl: './my-zone.component.html',
  styleUrls: ['./my-zone.component.scss']
})
export class MyZoneComponent implements OnInit, AfterViewInit {

  itemsNav: IMenuItems[] = [
    {
      name: 'Dashboard',
      state: true
    },
    {
      name: 'Workflow'
    },
    { name: 'Explore' },
    { name: 'More' }
  ];
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  @ViewChild('buttonToTop', { static: false }) buttonToTop: ElementRef<HTMLDivElement>;

  itemSelected: IMenuItems = undefined;

  searchBar = false;
  searchBarM = false;


  constructor() { }

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

  /** La linea abajo del item en el menu se movera dependiento del item selecionado */
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

  /** Abre o cierra el aside menu, agrega una clase para abrir el menu */
  onToggleAside() {
    this.sidenav.toggle();
    document.querySelector('mat-sidenav-container').classList.toggle('show-aside');
  }

  /** Intercambia la accion del icono Search por buscar o cancelar busqueda */
  onToggleSearch = () => this.searchBar || this.searchBarM ? this.searchBar = this.searchBarM = false : this.onSearchBar();


  /** Add or remove al abrir o cerrar el Aside Menu */
  closeAside = () => document.querySelector('mat-sidenav-container').classList.remove('show-aside');
  openAside = () => document.querySelector('mat-sidenav-container').classList.add('show-aside');

  /** si la resolucion es Menor a 660 */
  isMobile = () => document.documentElement.clientWidth < 660;

  /** Activa la barra de busqueda si es ta en mobile o en desktop */
  private onSearchBar = () => this.isMobile() ? this.searchBarM = true : this.searchBar = true;
}
