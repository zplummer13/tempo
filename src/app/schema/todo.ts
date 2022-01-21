import { SchemaObject } from "./schema-object";
import { TodoItem } from "./todo-item";

export class Todo implements SchemaObject<Todo> {

    public name: string;
    public items: TodoItem[];

    parse(input): Todo {
        if (input) {
            this.name = input.name;

            this.items = [];
            if (input.items) {
                for (let item of input.items) {
                    this.items.push(new TodoItem().parse(item));
                }
            }
        }
        return this;
    }

}