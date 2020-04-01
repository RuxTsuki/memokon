import { Component } from '@angular/core';
import { ThemingService } from 'src/app/theme/theming.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  _darkTheme = false;

  constructor(private themeS: ThemingService) { }

  toggleTheme() {
    this._darkTheme = !this._darkTheme;
    this._darkTheme ? this.themeS.setDarkTheme() : this.themeS.setLightTheme();
  }

}
