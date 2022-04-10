export interface IRepository<T> {
    getById(id: string): T;
}
