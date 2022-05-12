import '@testing-library/jest-dom';
import {
    fireEvent,
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import { anyOfClass, instance, mock, reset, verify, when } from 'ts-mockito';
import { IProject } from '../../../../../src/models/projects/IProject';
import { PageTransition } from '../../../../../src/models/routers/PageTransition';
import { IProjectService } from '../../../../../src/services/foundations/projects/IProjectService';
import { IRouterService } from '../../../../../src/services/foundations/router/IRouterService';
import { ProjectListPage } from '../../../../../src/views/pages/projects/list-projects/ProjectListPage';

describe('Project Page Test Stuite', () => {
    const mockedProjectService = mock<IProjectService>();
    const mockedRouterService = mock<IRouterService>();
    const mockedProject = mock<IProject>();
    const projectService = instance(mockedProjectService);
    const routerService = instance(mockedRouterService);
    const project = instance(mockedProject);

    beforeEach(() => {
        reset(mockedProjectService);
        reset(mockedRouterService);
        reset(mockedProject);
    });

    test('Should render project page when empty with no projects', async () => {
        when(mockedProjectService.getAllProjectsAsync()).thenResolve([]);
        render(
            <ProjectListPage
                routerService={routerService}
                projectService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

        const emptyText = screen.getByText(
            'You have no projects. Create a new project to get started'
        );
        expect(emptyText).toBeInTheDocument();
    });

    test('Should navigate to new project page when create project is clicked', async () => {
        when(mockedProjectService.getAllProjectsAsync()).thenResolve([]);
        when(
            mockedRouterService.navigate(anyOfClass(PageTransition))
        ).thenReturn();
        render(
            <ProjectListPage
                routerService={routerService}
                projectService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
        const createButton = screen.getByText('Create Project');
        fireEvent.click(createButton);

        verify(mockedRouterService.navigate(anyOfClass(PageTransition))).once();
        expect(createButton).toBeInTheDocument();
    });

    test('Should view an individual project when clicking on a project', async () => {
        when(mockedProject.name()).thenReturn('Project Name');
        when(mockedProjectService.getAllProjectsAsync()).thenResolve([project]);
        when(
            mockedRouterService.navigate(anyOfClass(PageTransition))
        ).thenReturn();
        render(
            <ProjectListPage
                routerService={routerService}
                projectService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
        const projectListElement = screen.getByText('Project Name');
        fireEvent.click(projectListElement);

        verify(mockedRouterService.navigate(anyOfClass(PageTransition))).once();
        expect(projectListElement).toBeInTheDocument();
    });
});
