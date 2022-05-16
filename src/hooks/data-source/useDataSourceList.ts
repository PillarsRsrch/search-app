import { useEffect, useState } from 'react';
import { IDataSource } from '../../models/data/IDataSource';
import { IDataSourceService } from '../../services/foundations/data-sources/IDataSourceService';
import { DataSourceListState } from './DataSourceListState';

export function useDataSourceList(
    dataSourceService: IDataSourceService
): [IDataSource[], DataSourceListState] {
    const [state, setState] = useState(DataSourceListState.Loading);
    const [dataSources, setDataSources] = useState<IDataSource[]>([]);

    useEffect(() => {
        async function getDataSources() {
            const dataSources = await dataSourceService.getAllDataSources();
            if (dataSources.length === 0) {
                setState(DataSourceListState.NoDataSources);
            } else {
                setState(DataSourceListState.LoadedDataSources);
            }
            setDataSources(dataSources);
        }

        getDataSources();
    });

    return [dataSources, state];
}
