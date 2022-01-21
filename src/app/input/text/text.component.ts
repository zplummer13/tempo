import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tc-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input()
  value: string = "";

  @Input()
  useAutofocus: boolean = false;

  @Output()
  emitValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clearValue() {
    this.value = "";
  }

  onAddValue() {
    this.emitValue.emit(this.value);
    this.clearValue();
  }

}
