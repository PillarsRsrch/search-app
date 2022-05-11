import React from 'react';
import '@testing-library/jest-dom';
import {
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import { anyString, instance, mock, reset, verify, when } from 'ts-mockito';
import { IProjectService } from '../../../../../src/services/foundations/projects/IProjectService';
import { ViewProjectPage } from '../../../../../src/views/pages/projects/view-project/ViewProjectPage';
import { IProject } from '../../../../../src/models/projects/IProject';
import { DataSourceTypes } from '../../../../../src/models/projects/DataSourceTypes';
import { resolvableInstance } from '../../../../extensions/resolvableInstance';

describe('View Project Page Test Suite', () => {
    const mockedProjectService = mock<IProjectService>();
    const mockedProject = mock<IProject>();
    const projectService = instance(mockedProjectService);
    const project = resolvableInstance(mockedProject);

    beforeEach(() => {
        reset(mockedProjectService);
        reset(mockedProject);
    });

    test('Should render loading text', async () => {
        const projectId = 'project-name';
        when(mockedProject.name()).thenReturn('Project Name');
        when(mockedProject.dataSource()).thenReturn(DataSourceTypes.None);
        when(mockedProjectService.getProjectByIdAsync(anyString())).thenResolve(
            project
        );
        when(mockedProjectService.getAllProjectsAsync()).thenResolve([]);
        render(
            <ViewProjectPage
                projectId={projectId}
                projectService={projectService}
            />
        );

        const loading = await screen.getByText('Loading...');

        expect(loading).toBeInTheDocument();
        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    });

    test('Should view project with no data source', async () => {
        const projectId = 'project-name';
        when(mockedProject.name()).thenReturn('Project Name');
        when(mockedProject.dataSource()).thenReturn(DataSourceTypes.None);
        when(mockedProjectService.getProjectByIdAsync(projectId)).thenResolve(
            project
        );
        render(
            <ViewProjectPage
                projectId={projectId}
                projectService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        const name = await screen.getByText('Project Name');

        expect(name).toBeInTheDocument();
        verify(mockedProject.dataSource()).once();
        verify(mockedProjectService.getProjectByIdAsync(projectId)).once();
    });

    test('Should view project with data source and render the data source wizard', async () => {
        const projectId = 'project-name';
        when(mockedProject.name()).thenReturn('Project Name');
        when(mockedProject.dataSource()).thenReturn(
            DataSourceTypes.GoogleDrive
        );
        when(mockedProjectService.getProjectByIdAsync(projectId)).thenResolve(
            project
        );
        render(
            <ViewProjectPage
                projectId={projectId}
                projectService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        const wizard = await screen.getByText('Data Setup Wizard');

        expect(wizard).toBeInTheDocument();
        verify(mockedProject.dataSource()).once();
        verify(mockedProjectService.getProjectByIdAsync(projectId)).once();
    });
});
