import { IDataSource } from '../../models/data/IDataSource';
import { LocalStorageRecord } from '../../repositories/local-storage/LocalStorageRecord';
import { IMapper } from '../IMapper';

export class LocalStorageRecordDataSourceMapper
    implements IMapper<LocalStorageRecord, IDataSource>
{
    map(object: LocalStorageRecord): IDataSource {
        throw new Error('Method not implemented.');
    }

    inverseMap(project: IDataSource): LocalStorageRecord {
        throw new Error('Method not implemented.');
    }
}
