import { Component, OnInit, } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Filterview } from './notes.interface';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '44px' })),
      transition('false <=> true', animate('450ms ease'))
    ]),
    trigger('beforeClose', [
      transition(':leave', [
        animate('80ms')
      ])
    ])]
})
export class NotesComponent implements OnInit {


  sections = ['', '', '']
  filterView: Filterview = 'cards'

  show = false;

  constructor() { }

  ngOnInit(): void {
  }

}
