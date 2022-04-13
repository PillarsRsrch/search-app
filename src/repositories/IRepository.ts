export interface IRepository<T> {
    getById(id: string): T;
    create(model: T): T;
}
