import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../shared/services/data.service";
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

    constructor(
        private router: Router,
        private dataService: DataService,        
    ) { }

    ngOnInit(): void {
        console.log('ListComponent INIT');
    }

    ngAfterViewInit(): void {
        this.loadData();
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

    loadData() {
        this.dataService.loadFile("todo.json")
            .then((fileJSON) => {
                console.log(fileJSON);
            })
    }

}