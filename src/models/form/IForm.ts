export interface IForm {
    getData(key: string): any;
    serialize(): Record<string, any>;
}
