import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from './notes.routing';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [NotesComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatRippleModule
  ],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }
