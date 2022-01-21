import { SchemaObject } from "./schema-object";

export class TodoItem implements SchemaObject<TodoItem> {

    public name: string;
    public description: string;
    public completed: boolean;

    parse(input): TodoItem {
        if (input) {
            this.name = input.name;
            this.description = input.description;
            this.completed = input.completed;
        }
        return this;
    }
}