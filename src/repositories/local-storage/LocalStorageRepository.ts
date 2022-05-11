import { IRepository } from '../IRepository';
import { LocalStorageRecord } from './LocalStorageRecord';

export class LocalStorageRepository implements IRepository<LocalStorageRecord> {
    constructor(private readonly key: string) {}

    create(entity: Record<string, string>): LocalStorageRecord {
        this.assertTableExists();
        const table = this.getTable();
        const id = entity['id'];
        table[id] = entity;
        this.setTable(table);
        return entity;
    }

    private assertTableExists() {
        if (!window.localStorage.getItem(this.key)) {
            window.localStorage.setItem(this.key, JSON.stringify({}));
        }
    }

    private getTable() {
        return JSON.parse(window.localStorage.getItem(this.key) as string);
    }

    private setTable(table: LocalStorageRecord) {
        window.localStorage.setItem(this.key, JSON.stringify(table));
    }

    getAll(): LocalStorageRecord[] {
        this.assertTableExists();
        const table = this.getTable();
        const entities = [];
        for (const id in table) {
            entities.push(table[id]);
        }
        return entities;
    }

    getById(id: string): LocalStorageRecord {
        this.assertTableExists();
        const table = this.getTable();
        return JSON.parse(table[id]);
    }
}
