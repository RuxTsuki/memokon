import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTestComponent } from './note-test.component';

describe('NoteTestComponent', () => {
  let component: NoteTestComponent;
  let fixture: ComponentFixture<NoteTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
