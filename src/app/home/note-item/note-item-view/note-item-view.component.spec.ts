import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteItemViewComponent } from './note-item-view.component';

describe('NoteItemViewComponent', () => {
  let component: NoteItemViewComponent;
  let fixture: ComponentFixture<NoteItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteItemViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
