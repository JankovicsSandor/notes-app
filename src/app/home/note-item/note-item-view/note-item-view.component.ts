import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteItem } from '@shared';


@Component({
  selector: 'note-item-view',
  templateUrl: './note-item-view.component.html',
  styleUrls: ['./note-item-view.component.scss']
})
export class NoteItemViewComponent implements OnInit {


  @Input() actualNote: NoteItem | null = null;

  @Output() deleteItem: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendDeleteItem() {
    this.deleteItem.emit(this.actualNote?.id);
  }

}
