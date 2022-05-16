import { IMapper } from '../../../mappers/IMapper';
import { IDataSource } from '../../../models/data/IDataSource';
import { IRepository } from '../../../repositories/IRepository';
import { LocalStorageRecord } from '../../../repositories/local-storage/LocalStorageRecord';
import { IDataSourceService } from './IDataSourceService';

export class LocalStorageDataSourceService implements IDataSourceService {
    constructor(
        private readonly repository: IRepository<LocalStorageRecord>,
        private readonly mapper: IMapper<LocalStorageRecord, IDataSource>
    ) {}

    async getAllDataSources(): Promise<IDataSource[]> {
        const records = this.repository.getAll();
        return records.map((record) => this.mapper.map(record));
    }

    async createDataSource(dataSource: IDataSource): Promise<IDataSource> {
        const record = this.mapper.inverseMap(dataSource);
        const storedRecord = this.repository.create(record);
        return this.mapper.map(storedRecord);
    }
}
