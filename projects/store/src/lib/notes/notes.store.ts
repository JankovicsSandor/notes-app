import { Injectable } from '@angular/core';
import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import { NoteItem } from '@shared';


export interface NotesState extends EntityState<NoteItem, number> { }
@Injectable()
@StoreConfig({ name: 'notes' })
export class NotesStore extends EntityStore<NotesState> {

  constructor() {
    super();
  }
}
