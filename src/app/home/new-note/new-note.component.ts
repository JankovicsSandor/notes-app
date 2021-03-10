import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoteItem } from '@shared';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
  newNoteForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<NewNoteComponent>) {
    this.newNoteForm = this.fb.group({
      title: "",
      content: ""
    })
  }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  createCloseData() {
    let formValue = this.newNoteForm.value;
    let returnValue = <NoteItem>{
      title: formValue.title,
      content: formValue.content,
      createTime: new Date()
    }

    return returnValue;
  }

}
