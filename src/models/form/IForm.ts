export interface IForm {
    getData(key: string): any;
    id(): string;
    serialize(): Record<string, any>;
}
