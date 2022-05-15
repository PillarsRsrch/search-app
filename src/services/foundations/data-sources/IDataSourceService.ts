import { IDataSource } from '../../../models/data/IDataSource';

export interface IDataSourceService {
    getAllDataSources(): Promise<IDataSource[]>;
    createDataSource(dataSource: IDataSource): Promise<IDataSource>;
}
