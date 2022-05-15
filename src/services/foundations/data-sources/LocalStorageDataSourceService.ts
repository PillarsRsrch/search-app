import { IDataSource } from '../../../models/data/IDataSource';
import { IDataSourceService } from './IDataSourceService';

export class LocalStorageDataSourceService implements IDataSourceService {
    async getAllDataSources(): Promise<IDataSource[]> {
        return [];
    }

    async createDataSource(dataSource: IDataSource): Promise<IDataSource> {
        throw new Error('Method not implemented.');
    }
}
