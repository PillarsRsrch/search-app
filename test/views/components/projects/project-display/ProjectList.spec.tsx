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
import { ProjectList } from '../../../../../src/views/components/projects/projects-list/ProjectList';

describe('Project List Test Suite', () => {
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
            <ProjectList
                onCreateProject={onCreateProject}
                projectsService={projectService}
            />
        );

        const loadingText = screen.getByText('Loading...');

        expect(onCreateProject).not.toBeCalled();
        expect(loadingText).toBeInTheDocument();
        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    });

    test('Should render an empty project list', async () => {
        when(mockProjectService.getAllProjectsAsync()).thenResolve([]);
        const onCreateProject = jest.fn();
        const { container } = render(
            <ProjectList
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
            <ProjectList
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

    test('Should render a project list', async () => {
        when(mockedProject.name()).thenReturn('Project Name');
        when(mockProjectService.getAllProjectsAsync()).thenResolve([project]);
        const onCreateProject = jest.fn();
        const { container } = render(
            <ProjectList
                onCreateProject={onCreateProject}
                projectsService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
        const name = screen.getByText('Project Name');
        const createButton =
            container.getElementsByClassName('button-component')[0];

        expect(onCreateProject).not.toBeCalled();
        expect(createButton).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        verify(mockProjectService.getAllProjectsAsync()).once();
        verify(mockedProject.id()).once();
    });
});
