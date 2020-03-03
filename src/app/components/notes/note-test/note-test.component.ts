import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-test',
  templateUrl: './note-test.component.html',
  styleUrls: ['./note-test.component.scss']
})
export class NoteTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Hey im in the beggining')
  }

}
