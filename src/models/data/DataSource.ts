import { DataSourceTypes } from './DataSourceTypes';
import { IDataSource } from './IDataSource';
import { IDataSourceConfiguration } from './IDataSourceConfiguration';
import { IDataSourceDTO } from './IDataSourceDTO';

export class DataSource implements IDataSource {
    constructor(private readonly props: IDataSourceDTO) {}

    id(): string {
        return this.props.name;
    }

    type(): DataSourceTypes {
        return this.props.type;
    }

    name(): string {
        return this.props.name;
    }

    configuration(): IDataSourceConfiguration {
        throw new Error('Method not implemented');
    }
}
