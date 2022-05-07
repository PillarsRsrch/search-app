export interface IForm {
    getData<T>(key: string): T;
    serialize(): Record<string, any>;
}
