import React from 'react';
import { Button } from '../../../bases/button/Button';
import { Heading } from '../../../bases/header/Heading';
import { Text } from '../../../bases/text/Text';
import { HorizontallyCenteredLayout } from '../../../components/layouts/centered/HorizontallyCenteredLayout';
import { useProject } from '../../../../hooks/projects/useProject';
import { IViewDataPageProps } from './IViewDataPageProps';
import { ProjectState } from '../../../../hooks/projects/ProjectState';
import { PageTransition } from '../../../../models/routers/PageTransition';
import { DataSourceList } from '../../../components/data-sources/data-source-list/DataSourceList';
import { ProjectName } from '../../../components/projects/project-name/ProjectName';

export const ViewDataPage = ({
    dataSourceService,
    projectService,
    projectId,
    routerService,
}: IViewDataPageProps) => {
    function onCreateDataSource() {
        routerService.navigate(
            new PageTransition(`/projects/${projectId}/data/sources/create`)
        );
    }

    return (
        <HorizontallyCenteredLayout>
            <ProjectName
                projectId={projectId}
                projectService={projectService}
            />
            <Heading level={2}>Data Sources</Heading>
            <DataSourceList dataSourceService={dataSourceService} />
            <Button disabled={false} onClick={onCreateDataSource}>
                Add Data Source
            </Button>
        </HorizontallyCenteredLayout>
    );
};
