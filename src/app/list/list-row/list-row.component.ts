import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../schema/todo-item';

@Component({
  selector: 'tc-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss']
})
export class ListRowComponent implements OnInit {

  @Input()
  item: TodoItem;

  @Output()
  emitRemove = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

  onRemove() {
    this.emitRemove.emit(true);
  }

}
