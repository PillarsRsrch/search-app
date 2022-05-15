import React from 'react';
import '@testing-library/jest-dom';
import {
    fireEvent,
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import { ViewDataPage } from '../../../../../src/views/pages/data/view-data/ViewDataPage';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { IDataSourceService } from '../../../../../src/services/foundations/data-sources/IDataSourceService';
import { resolvableInstance } from '../../../../extensions/resolvableInstance';
import { IDataSource } from '../../../../../src/models/data/IDataSource';
import { IProjectService } from '../../../../../src/services/foundations/projects/IProjectService';
import { IProject } from '../../../../../src/models/projects/IProject';
import { IRouterService } from '../../../../../src/services/foundations/router/IRouterService';

describe('View Data Page Test Suite', () => {
    const mockedDataSourceService = mock<IDataSourceService>();
    const mockedDataSource = mock<IDataSource>();
    const mockedProjectService = mock<IProjectService>();
    const mockedProject = mock<IProject>();
    const mockedRouterService = mock<IRouterService>();
    const dataSourceService = instance(mockedDataSourceService);
    const dataSource = resolvableInstance(mockedDataSource);
    const projectService = instance(mockedProjectService);
    const project = resolvableInstance(mockedProject);
    const routerService = instance(mockedRouterService);

    beforeEach(() => {
        reset(mockedDataSourceService);
        reset(mockedDataSource);
        reset(mockedProject);
        reset(mockedRouterService);
        reset(mockedProjectService);
    });

    test('Should render the view data page with no data sources', async () => {
        const projectName = 'Project Name';
        const projectId = 'project-id';
        when(mockedDataSourceService.getAllDataSources()).thenResolve([]);
        when(mockedProjectService.getProjectByIdAsync(projectId)).thenResolve(
            project
        );
        when(mockedProject.name()).thenReturn(projectName);

        render(
            <ViewDataPage
                routerService={routerService}
                projectId={projectId}
                projectService={projectService}
                dataSourceService={dataSourceService}
            />
        );

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        expect(screen.getByText(`${projectName} Data`));
        expect(screen.getByText('Data Sources')).toBeInTheDocument();
        expect(
            screen.getByText('No data sources exist in this project yet.')
        ).toBeInTheDocument();
        expect(screen.getByText('Add Data Source'));
    });

    test('Should render the view data page with data sources', async () => {
        const projectName = 'Cool Project';
        const projectId = 'cool-project';
        const dataSourceName = 'Data Source Name';
        when(mockedDataSourceService.getAllDataSources()).thenResolve([
            dataSource,
        ]);
        when(mockedProjectService.getProjectByIdAsync(projectId)).thenResolve(
            project
        );
        when(mockedProject.name()).thenReturn(projectName);
        when(mockedDataSource.name()).thenReturn(dataSourceName);

        render(
            <ViewDataPage
                routerService={routerService}
                projectId={projectId}
                projectService={projectService}
                dataSourceService={dataSourceService}
            />
        );

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        expect(screen.getByText(`${projectName} Data`));
        expect(screen.getByText('Data Sources')).toBeInTheDocument();
        expect(screen.getByText(dataSourceName)).toBeInTheDocument();
        expect(screen.getByText('Add Data Source'));
    });

    test('Should render the view data page and navigate to the create data source page on click', async () => {
        const projectName = 'Cool Project';
        const projectId = 'cool-project';
        const dataSourceName = 'Data Source Name';
        when(mockedDataSourceService.getAllDataSources()).thenResolve([
            dataSource,
        ]);
        when(mockedProjectService.getProjectByIdAsync(projectId)).thenResolve(
            project
        );
        when(mockedProject.name()).thenReturn(projectName);
        when(mockedDataSource.name()).thenReturn(dataSourceName);

        render(
            <ViewDataPage
                projectId={projectId}
                routerService={routerService}
                projectService={projectService}
                dataSourceService={dataSourceService}
            />
        );
        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        const button = screen.getByText('Add Data Source');
        fireEvent.click(button);

        verify(mockedRouterService.navigate(anything())).once();
    });
});
