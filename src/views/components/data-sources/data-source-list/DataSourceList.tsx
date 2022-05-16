import React from 'react';
import { DataSourceListState } from '../../../../hooks/data-source/DataSourceListState';
import { useDataSourceList } from '../../../../hooks/data-source/useDataSourceList';
import { Text } from '../../../bases/text/Text';
import { IDataSourceListProps } from './IDataSourceListProps';

export const DataSourceList = ({ dataSourceService }: IDataSourceListProps) => {
    const [dataSources, dataSourceState] = useDataSourceList(dataSourceService);
    const componentTable = new Map([
        [DataSourceListState.Loading, <Text>Loading data sources...</Text>],
        [
            DataSourceListState.NoDataSources,
            <Text>No data sources exist in this project yet.</Text>,
        ],
        [
            DataSourceListState.LoadedDataSources,
            <>
                {dataSources.map((dataSource) => (
                    <Text key={dataSource.name()}>{dataSource.name()}</Text>
                ))}
            </>,
        ],
    ]);

    return <>{componentTable.get(dataSourceState)}</>;
};
