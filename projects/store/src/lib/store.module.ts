import { NotesService } from './notes/notes.service';
import { NotesQuery } from './notes/notes.query';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [NotesQuery, NotesService]
})
export class StoreModule { }
