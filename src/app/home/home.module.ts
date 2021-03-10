import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button"
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { NoteItemViewComponent } from './note-item/note-item-view/note-item-view.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [HomeComponent, NewNoteComponent, NoteItemComponent, NoteItemViewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class HomeModule { }
