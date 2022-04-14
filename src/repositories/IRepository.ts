export interface IRepository<T> {
    create(model: T): T;
    getAll(): T[];
    getById(id: string): T;
}
