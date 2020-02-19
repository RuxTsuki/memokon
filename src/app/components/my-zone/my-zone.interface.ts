/* Items del menu superior */
export interface IMenuItems {
  name: string;
  code?: string;
  state?: boolean;
  width?: number;
  onTopMenu?: boolean;
}
/* Items de las secciones aside */
export interface IAsideItems {
  name: string;
  state?: boolean;
  iconName?: string;
  tooltip?: string;
  itemCode?: string;
}
/* Secciones del aside menu */
export interface IAsideSections {
  title?: string;
  code?: string;
  items?: IAsideItems[];
}
/* Filtros que recibe Searchbar para buscar */
export interface ISearchFilters {
  title: string;
  code: string;
  content?: ISearchFilters[];
}

export interface ISearchFiltered {
  mainFilter: string;
  advanced?: string;
}
