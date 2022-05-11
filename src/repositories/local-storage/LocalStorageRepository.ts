import { ILocalStorageRepository } from './ILocalStorageRepository';
import { LocalStorageRecord } from './LocalStorageRecord';

export class LocalStorageRepository implements ILocalStorageRepository {
    constructor(private readonly key: string) {}

    getAll(): LocalStorageRecord[] {
        this.assertTableExists();
        const table = this.getTable();
        const entities = [];
        for (const id in table) {
            entities.push(table[id]);
        }
        return entities;
    }

    private assertTableExists() {
        if (!window.localStorage.getItem(this.key)) {
            window.localStorage.setItem(this.key, JSON.stringify({}));
        }
    }

    private getTable() {
        return JSON.parse(window.localStorage.getItem(this.key) as string);
    }

    save(entity: Record<string, string>): LocalStorageRecord {
        this.assertTableExists();
        const table = this.getTable();
        const id = entity['id'];
        table[id] = entity;
        this.setTable(table);
        return entity;
    }

    private setTable(table: LocalStorageRecord) {
        window.localStorage.setItem(this.key, JSON.stringify(table));
    }
}
