import { Injectable } from '@angular/core';
import { ITheme, lightTheme, darkTheme } from './theme-list';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  private activeT: ITheme = lightTheme;
  private availableThemes: ITheme[] = [darkTheme, lightTheme]

  constructor() { }

  getActiveTheme() {
    return this.activeT;
  }
  isDarkTheme() {
    return this.activeT.name === darkTheme.name;
  }

  setDarkTheme() {
    this.setActiveTheme(darkTheme);
  }

  setLightTheme() {
    this.setActiveTheme(lightTheme);
  }

  private setActiveTheme(theme: ITheme) {
    this.activeT = theme;
    for (const key in theme?.propertys) {
      document.documentElement.style.setProperty(key, theme.propertys[key]);
    }
  }

}
