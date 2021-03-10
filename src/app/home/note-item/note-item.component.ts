import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { NoteItem } from '@shared';
import { NotesQuery, NotesService } from '@store';

@Component({
  selector: 'note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteItemComponent implements OnInit {
  constructor(public noteStoreQuery: NotesQuery, private notesStoreWrite: NotesService) { }

  ngOnInit(): void {
  }

  deleteItemFromList(itemId: string) {
    this.notesStoreWrite.removeNote(itemId);
  }

}
