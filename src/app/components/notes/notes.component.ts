import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  show = false;
  constructor() { }

  ngOnInit(): void {
  }

  noteToggle() {
    this.show = !this.show;

  }

}
