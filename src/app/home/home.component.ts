import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesQuery, NotesService } from '@store';
import { NewNoteComponent } from './new-note/new-note.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public noteStoreWrite: NotesService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addNewNote() {
    const dialogRef = this.dialog.open(NewNoteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.noteStoreWrite.addNote(result);
    });
  }

}
