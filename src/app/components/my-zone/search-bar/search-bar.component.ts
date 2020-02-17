import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ISearchFiltered } from '../my-zone.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnChanges {

  @Input() searchFiltered: ISearchFiltered[];
  @Input() onFocus: boolean = false;
  @ViewChild('search', { static: true }) search: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnChanges(): void {
    if (this.onFocus) {
      this.focusInput();
    }
  }

  onKeyup(ev: HTMLInputElement) {
    console.log(ev.value);
  }

  focusInput = () => this.search.nativeElement.focus();

}
