import { IIdentifiable } from '../../operations/IIdentifiable';
import { DataSourceTypes } from './DataSourceTypes';

export interface IDataSource extends IIdentifiable {
    type(): DataSourceTypes;
    name(): string;
}
