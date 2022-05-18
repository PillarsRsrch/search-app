export interface IAsyncRepository<T> {
    create(model: T): Promise<T>;
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T>;
}
