import { IIdentifiable } from '../../operations/IIdentifiable';
import { DataSourceTypes } from './DataSourceTypes';
import { IDataSourceConfiguration } from './IDataSourceConfiguration';

export interface IDataSource extends IIdentifiable {
    type(): DataSourceTypes;
    name(): string;
    configuration(): IDataSourceConfiguration;
}
