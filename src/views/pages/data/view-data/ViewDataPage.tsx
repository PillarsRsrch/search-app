import React, { useEffect, useState } from 'react';
import { IDataSource } from '../../../../models/data/IDataSource';
import { Button } from '../../../bases/button/Button';
import { Heading } from '../../../bases/header/Heading';
import { Text } from '../../../bases/text/Text';
import { HorizontallyCenteredLayout } from '../../../components/layouts/centered/HorizontallyCenteredLayout';
import { useProject } from '../../../../hooks/projects/useProject';
import { DataSourceState } from './DataSourceState';
import { IViewDataPageProps } from './IViewDataPageProps';
import { ProjectHookState } from '../../../../hooks/projects/ProjectHookState';
import { PageTransition } from '../../../../models/routers/PageTransition';

export const ViewDataPage = ({
    dataSourceService,
    projectService,
    projectId,
    routerService,
}: IViewDataPageProps) => {
    const [project, projectState] = useProject(projectService, projectId);
    const [state, setState] = useState(DataSourceState.Loading);
    const [dataSources, setDataSources] = useState<IDataSource[]>([]);

    useEffect(() => {
        async function getDataSources() {
            const dataSources = await dataSourceService.getAllDataSources();
            if (dataSources.length === 0) {
                setState(DataSourceState.NoDataSources);
            } else {
                setState(DataSourceState.LoadedDataSources);
            }
            setDataSources(dataSources);
        }

        getDataSources();
    });

    function renderDataSources() {
        if (state === DataSourceState.Loading) {
            return <Text>Loading Data Sources...</Text>;
        } else if (state === DataSourceState.NoDataSources) {
            return <Text>No data sources exist in this project yet.</Text>;
        } else {
            return (
                <>
                    {dataSources.map((dataSource) => (
                        <Text key={dataSource.name()}>{dataSource.name()}</Text>
                    ))}
                </>
            );
        }
    }

    if (projectState === ProjectHookState.Loading) {
        return (
            <HorizontallyCenteredLayout>
                <Text>Loading...</Text>
            </HorizontallyCenteredLayout>
        );
    }

    function onCreateDataSource() {
        routerService.navigate(
            new PageTransition(`/projects/${project!.id()}/data/sources/create`)
        );
    }

    return (
        <HorizontallyCenteredLayout>
            <Heading level={1}>{project!.name()} Data</Heading>
            <Heading level={2}>Data Sources</Heading>
            {renderDataSources()}
            <Button disabled={false} onClick={onCreateDataSource}>
                Add Data Source
            </Button>
        </HorizontallyCenteredLayout>
    );
};
