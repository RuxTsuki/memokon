export interface IMenuItems {
  name: string;
  code?: string;
  state?: boolean;
  width?: number;
  onTopMenu?: boolean;
}

export interface IAsideItems {
  name: string;
  state?: boolean;
  iconName?: string;
  tooltip?: string;
}
export interface IAsideSections {
  title?: string;
  code?: string;
  items?: IAsideItems[];
}
