import '@testing-library/jest-dom';
import {
    fireEvent,
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import { anyOfClass, instance, mock, reset, verify, when } from 'ts-mockito';
import { PageTransition } from '../../../../src/models/routers/PageTransition';
import { IProjectsService } from '../../../../src/services/foundations/projects/IProjectsService';
import { IRouterService } from '../../../../src/services/foundations/router/IRouterService';
import { ProjectPage } from '../../../../src/views/pages/projects/ProjectPage';

describe('Project Page Test Stuite', () => {
    const mockedProjectService = mock<IProjectsService>();
    const mockedRouterService = mock<IRouterService>();
    const projectService = instance(mockedProjectService);
    const routerService = instance(mockedRouterService);

    beforeEach(() => {
        reset(mockedProjectService);
        reset(mockedRouterService);
    });

    test('Should render project page when empty with no projects', () => {
        when(mockedProjectService.getAllServicesAsync()).thenResolve([]);
        const { container } = render(
            <ProjectPage
                routerService={routerService}
                projectService={projectService}
            />
        );

        const projectComponent = container.getElementsByClassName(
            'project-display-component'
        )[0];

        expect(projectComponent).toBeInTheDocument();
    });

    test('Should navigate to new project page when create project is clicked', async () => {
        when(mockedProjectService.getAllServicesAsync()).thenResolve([]);
        when(
            mockedRouterService.navigate(anyOfClass(PageTransition))
        ).thenReturn();
        const { container } = render(
            <ProjectPage
                routerService={routerService}
                projectService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
        const projectComponent = container.getElementsByClassName(
            'project-display-component'
        )[0];
        const createButton =
            projectComponent.getElementsByClassName('button-component')[0];
        fireEvent.click(createButton);

        verify(mockedRouterService.navigate(anyOfClass(PageTransition))).once();
        expect(projectComponent).toBeInTheDocument();
    });
});
