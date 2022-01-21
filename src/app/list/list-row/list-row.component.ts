import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss']
})
export class ListRowComponent implements OnInit {

  @Input()
  row: Row;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Row {
  value?: string;
}
