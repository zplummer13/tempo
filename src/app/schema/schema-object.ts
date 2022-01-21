export interface SchemaObject<T> {
    parse(input: Object): T;
}