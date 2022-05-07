export interface IFormService {
    getField<T>(field: string): T;
    hasField(field: string): boolean;
    addField<T>(field: string, data: T): void;
    setField<T>(field: string, data: T): void;
    removeField(field: string): boolean;
    serialize(): Record<string, any>;
}
