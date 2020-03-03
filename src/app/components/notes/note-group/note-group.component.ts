import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { NoteHeaderComponent } from '../note-header/note-header.component';
import { NoteContentComponent } from '../note-content/note-content.component';

@Component({
  selector: 'app-note-group',
  templateUrl: './note-group.component.html',
  styleUrls: ['./note-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteGroupComponent {

  @ContentChild(NoteHeaderComponent) header: NoteHeaderComponent;
  @ContentChild(NoteContentComponent) content: NoteContentComponent;

  toggle() {
    this.header.isOpen = !this.header.isOpen;
    this.content.isOpen = !this.content.isOpen;
  }

}
