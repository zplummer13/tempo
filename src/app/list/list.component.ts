import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Row } from "./list-row/list-row.component";

@Component({
    selector: 'tc-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    public rows: Row[] = [
        {
            value: "item 1",
        },
        {
            value: "item 2",
        },
        {
            value: "item 3",
        }
    ];

    constructor(private router: Router) { }

    ngOnInit(): void {
        console.log('ListComponent INIT');
    }

    addRow(addedValue: string) {
        let newRow: Row = {
            value: addedValue,
        };
        this.rows.push(newRow);
    }

    deleteRow(index: number) {
        console.log("delete row: " + index);
    }

}