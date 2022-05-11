import { LocalStorageRecord } from './LocalStorageRecord';

export interface ILocalStorageRepository {
    getAll(): LocalStorageRecord[];
    save(entity: Record<string, string>): LocalStorageRecord;
}
