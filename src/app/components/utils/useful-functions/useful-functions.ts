import { ThemingService } from 'src/app/theme/theming.service';
import { MyZoneService } from '../../my-zone/my-zone.service';

export class UsefulFunctions {

  private _darkTheme = false;

  constructor(private themeS: ThemingService, public myZoneS: MyZoneService) {
  }

  toggleTheme() {
    this._darkTheme = !this._darkTheme;
    this._darkTheme ? this.themeS.setDarkTheme() : this.themeS.setLightTheme();
  }

}
