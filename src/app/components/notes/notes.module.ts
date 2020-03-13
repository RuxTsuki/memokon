import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from './notes.routing';
import { MatRippleModule } from '@angular/material/core';
import { NoteHeaderComponent } from './note-header/note-header.component';
import { NoteContentComponent } from './note-content/note-content.component';
import { NoteGroupComponent } from './note-group/note-group.component';
import { NoteContainerComponent } from './note-container/note-container.component';
import { NoteTestComponent } from './note-test/note-test.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NotesComponent, NoteHeaderComponent, NoteContentComponent, NoteGroupComponent, NoteContainerComponent, NoteTestComponent, NoteCardComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatRippleModule,
    MatButtonModule
  ],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }
