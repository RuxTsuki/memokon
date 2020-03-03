import { Component, ContentChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { NoteGroupComponent } from '../note-group/note-group.component';
import { mapTo, startWith, switchMap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteContainerComponent {
  @ContentChildren(NoteGroupComponent) NotesGroups: QueryList<NoteGroupComponent>;

  ngAfterViewInit(): void {
    this.NotesGroups.changes.pipe(startWith(this.NotesGroups), switchMap(groups => {
      const headerClicks$ = groups.map(group => group.header.click$.pipe(mapTo(group)))
      return merge(...headerClicks$);
    })).subscribe((group: NoteGroupComponent) => group.toggle());
  }
}
