import React from 'react';
import '@testing-library/jest-dom';
import {
    fireEvent,
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { IProjectService } from '../../../../../src/services/foundations/projects/IProjectService';
import { ViewProjectPage } from '../../../../../src/views/pages/projects/view-project/ViewProjectPage';
import { IProject } from '../../../../../src/models/projects/IProject';
import { resolvableInstance } from '../../../../extensions/resolvableInstance';
import { IRouterService } from '../../../../../src/services/foundations/router/IRouterService';

describe('View Project Page Test Suite', () => {
    const mockedRouterService = mock<IRouterService>();
    const mockedProjectService = mock<IProjectService>();
    const mockedProject = mock<IProject>();
    const projectService = instance(mockedProjectService);
    const project = resolvableInstance(mockedProject);
    const routerService = instance(mockedRouterService);

    beforeEach(() => {
        reset(mockedProjectService);
        reset(mockedProject);
        reset(mockedRouterService);
    });

    test('Should render loading text', async () => {
        const projectId = 'project-name';
        when(mockedProject.name()).thenReturn('Project Name');
        when(mockedProjectService.getProjectByIdAsync(projectId)).thenResolve(
            project
        );
        render(
            <ViewProjectPage
                routerService={routerService}
                projectId={projectId}
                projectService={projectService}
            />
        );

        const loading = screen.getByText('Loading...');

        expect(loading).toBeInTheDocument();
        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    });

    test('Should view project', async () => {
        const projectId = 'project-name';
        when(mockedProject.name()).thenReturn('Project Name');
        when(mockedProjectService.getProjectByIdAsync(projectId)).thenResolve(
            project
        );
        render(
            <ViewProjectPage
                routerService={routerService}
                projectId={projectId}
                projectService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        const name = await screen.getByText('Project Name');
        const dataButton = screen.getByText('View Data');

        expect(name).toBeInTheDocument();
        verify(mockedProjectService.getProjectByIdAsync(projectId)).once();
        expect(dataButton).toBeInTheDocument();
    });

    test('Should navigate to data view for the project', async () => {
        const projectId = 'project-name';
        when(mockedProject.name()).thenReturn('Project Name');
        when(mockedProjectService.getProjectByIdAsync(projectId)).thenResolve(
            project
        );
        render(
            <ViewProjectPage
                routerService={routerService}
                projectId={projectId}
                projectService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        const dataButton = screen.getByText('View Data');
        fireEvent.click(dataButton);

        verify(mockedRouterService.navigate(anything())).once();
    });
});
