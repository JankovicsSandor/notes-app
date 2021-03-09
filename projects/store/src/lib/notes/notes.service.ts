import { Injectable } from '@angular/core';
import { NoteItem } from '@shared';
import { Guid } from '@utils';
import { NotesStore } from './notes.store';

@Injectable()
export class NotesService {

  constructor(private notesStore: NotesStore) { }

  addNote(newItem: NoteItem) {
    let item = newItem;
    item.id = Guid.newGuid();
    this.notesStore.add(item);
  }

  removeNote(itemId: string) {
    this.notesStore.remove(({ id }) => id == itemId);
  }
}
