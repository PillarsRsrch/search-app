import { DataSourceTypes } from './DataSourceTypes';

export interface IDataSourceConfiguration {
    type(): DataSourceTypes;
}
