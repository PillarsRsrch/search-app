import { DataSourceTypes } from './DataSourceTypes';

export interface IDataSource {
    type(): DataSourceTypes;
    name(): string;
}
