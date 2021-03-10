import { NotesStore } from './notes/notes.store';
import { NotesService } from './notes/notes.service';
import { NotesQuery } from './notes/notes.query';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [NotesQuery, NotesStore, NotesService]
})
export class StoreModule { }
