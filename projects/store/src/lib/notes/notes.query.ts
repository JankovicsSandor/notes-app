import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NotesStore, NotesState } from './notes.store';

@Injectable()
export class NotesQuery extends QueryEntity<NotesState> {

  constructor(protected store: NotesStore) {
    super(store);
  }

}
