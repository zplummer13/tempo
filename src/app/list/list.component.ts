import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "../schema/todo";
import { TodoItem } from "../schema/todo-item";
import { DataService } from "../shared/services/data.service";

@Component({
    selector: 'tc-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input()
    fileName: string;

    public loading: boolean = true;
    public todo: Todo;

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

    addItem(addedValue: string) {
        let newItem= new TodoItem().parse({
            name: addedValue,
            description: "",
            completed: false,
        });
        this.todo.items.push(newItem);

        this.saveData();
    }

    deleteRow(index: number) {
        console.log("delete row: " + index);
        this.todo.items.splice(index,1);
        this.saveData();
    }

    loadData() {
        this.dataService.loadFile("todo.json")
            .then((fileJSON) => {
                console.log(fileJSON);
                this.todo = new Todo().parse(fileJSON);
                console.log(this.todo);
                this.loading = false;
            })
    }

    saveData() {
        this.dataService.saveFile("todo.json", JSON.stringify(this.todo))
            .catch(err => {
                console.log(err);
            })
    }

}