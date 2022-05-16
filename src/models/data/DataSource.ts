import { DataSourceTypes } from './DataSourceTypes';
import { IDataSource } from './IDataSource';
import { IDataSourceDTO } from './IDataSourceDTO';

export class DataSource implements IDataSource {
    constructor(private readonly props: IDataSourceDTO) {}

    type(): DataSourceTypes {
        return this.props.type;
    }

    name(): string {
        return this.props.name;
    }
}
