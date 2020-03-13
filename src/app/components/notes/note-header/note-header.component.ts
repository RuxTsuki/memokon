import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Input, HostBinding } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-note-header',
  templateUrl: './note-header.component.html',
  styleUrls: ['./note-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: `noteHeader`
})
export class NoteHeaderComponent {

  clicks$ = fromEvent(this.host.nativeElement, 'click');
  keyDown$ = fromEvent(this.host.nativeElement, 'keydown');
  click$ = merge(this.clicks$, this.keyDown$.pipe(map((event: KeyboardEvent) => event.keyCode === 32 || event.keyCode == 13)));

  _isOpen = false;

  //.pipe(map((event: KeyboardEvent) => event.keyCode === 32 || event.keyCode == 13 ? null : null)) ? this.keyDown$ : null)

  constructor(private host: ElementRef, private cdr: ChangeDetectorRef) { }
  /** para estilos */
  @Input() @HostBinding('class.accordion-open')

  set isOpen(value: boolean) {
    console.log(this.keyDown$);
    if (this.isOpen !== value) {
      this._isOpen = value;
      this.cdr.markForCheck();
    }
  }

  get isOpen() {
    return this._isOpen;
  }

}
