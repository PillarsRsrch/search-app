import { DataSource } from '../../models/data/DataSource';
import { DataSourceTypes } from '../../models/data/DataSourceTypes';
import { IDataSource } from '../../models/data/IDataSource';
import { LocalStorageRecord } from '../../repositories/local-storage/LocalStorageRecord';
import { IMapper } from '../IMapper';

export class LocalStorageRecordDataSourceMapper
    implements IMapper<LocalStorageRecord, IDataSource>
{
    map(record: LocalStorageRecord): IDataSource {
        return new DataSource({
            name: record.name,
            type: record.type as DataSourceTypes,
        });
    }

    inverseMap(project: IDataSource): LocalStorageRecord {
        return {
            id: project.id(),
            name: project.name(),
            type: project.type(),
        };
    }
}
