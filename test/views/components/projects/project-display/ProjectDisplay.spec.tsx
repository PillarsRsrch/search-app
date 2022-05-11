import '@testing-library/jest-dom';
import {
    fireEvent,
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import { verify, instance, mock, reset, when } from 'ts-mockito';
import { IProject } from '../../../../../src/models/projects/IProject';
import { IProjectService } from '../../../../../src/services/foundations/projects/IProjectService';
import { ProjectDisplay } from '../../../../../src/views/components/projects/projects-display/ProjectDisplay';

describe('Project Display Test Suite', () => {
    const mockProjectService = mock<IProjectService>();
    const mockedProject = mock<IProject>();
    const projectService = instance(mockProjectService);
    const project = instance(mockedProject);

    beforeEach(() => {
        reset(mockProjectService);
    });

    test('Should render a loading message while fetching projects', async () => {
        when(mockProjectService.getAllProjectsAsync()).thenResolve([]);
        const onCreateProject = jest.fn();
        render(
            <ProjectDisplay
                onCreateProject={onCreateProject}
                projectsService={projectService}
            />
        );

        const loadingText = screen.getByText('Loading...');

        expect(onCreateProject).not.toBeCalled();
        expect(loadingText).toBeInTheDocument();
        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    });

    test('Should render an empty project display', async () => {
        when(mockProjectService.getAllProjectsAsync()).thenResolve([]);
        const onCreateProject = jest.fn();
        const { container } = render(
            <ProjectDisplay
                onCreateProject={onCreateProject}
                projectsService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
        const emptyText = screen.getByText(
            'You have no projects. Create a new project to get started'
        );
        const createButton =
            container.getElementsByClassName('button-component')[0];

        expect(onCreateProject).not.toBeCalled();
        expect(emptyText).toBeInTheDocument();
        expect(createButton).toBeInTheDocument();
    });

    test('Should call the create project prop', async () => {
        when(mockProjectService.getAllProjectsAsync()).thenResolve([]);
        const onCreateProject = jest.fn();
        const { container } = render(
            <ProjectDisplay
                onCreateProject={onCreateProject}
                projectsService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
        const createButton =
            container.getElementsByClassName('button-component')[0];
        fireEvent.click(createButton);

        expect(onCreateProject).toBeCalled();
    });

    test('Should render an empty project display', async () => {
        when(mockedProject.name()).thenReturn('1');
        when(mockProjectService.getAllProjectsAsync()).thenResolve([project]);
        const onCreateProject = jest.fn();
        const { container } = render(
            <ProjectDisplay
                onCreateProject={onCreateProject}
                projectsService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
        const projects = container.getElementsByClassName('project-component');
        const createButton =
            container.getElementsByClassName('button-component')[0];

        expect(onCreateProject).not.toBeCalled();
        expect(createButton).toBeInTheDocument();
        verify(mockProjectService.getAllProjectsAsync()).once();
        expect(projects.length).toEqual(1);
        expect(projects[0]).toBeInTheDocument();
    });
});
