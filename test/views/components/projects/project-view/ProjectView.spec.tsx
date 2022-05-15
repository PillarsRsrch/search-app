import React from 'react';
import {
    fireEvent,
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { instance, mock, reset, when } from 'ts-mockito';
import { IProject } from '../../../../../src/models/projects/IProject';
import { IProjectService } from '../../../../../src/services/foundations/projects/IProjectService';
import { ProjectView } from '../../../../../src/views/components/projects/project-view/ProjectView';
import { resolvableInstance } from '../../../../extensions/resolvableInstance';

describe('Project View Test Suite', () => {
    const mockedProjectService = mock<IProjectService>();
    const mockedProject = mock<IProject>();
    const projectService = instance(mockedProjectService);
    const project = resolvableInstance(mockedProject);
    const onViewData = jest.fn();

    beforeEach(() => {
        reset(mockedProject);
        reset(mockedProjectService);
        onViewData.mockReset();
    });

    test('Should render the loading fragment when the project is loading', async () => {
        const projectId = 'project-name';
        when(mockedProjectService.getProjectByIdAsync(projectId)).thenResolve(
            project
        );
        when(mockedProject.name()).thenReturn('Project Name');
        render(
            <ProjectView
                onViewData={onViewData}
                projectId={projectId}
                projectService={projectService}
            />
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    });

    test('Should render the project fragment when the project is loaded', async () => {
        const projectId = 'project-name';
        when(mockedProjectService.getProjectByIdAsync(projectId)).thenResolve(
            project
        );
        when(mockedProject.name()).thenReturn('Project Name');

        render(
            <ProjectView
                onViewData={onViewData}
                projectId={projectId}
                projectService={projectService}
            />
        );

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        expect(screen.getByText('Project Name')).toBeInTheDocument();
    });

    test('Should call the on view data listener when the button is clicked', async () => {
        const projectId = 'project-name';
        when(mockedProjectService.getProjectByIdAsync(projectId)).thenResolve(
            project
        );
        when(mockedProject.name()).thenReturn('Project Name');

        render(
            <ProjectView
                onViewData={onViewData}
                projectId={projectId}
                projectService={projectService}
            />
        );
        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        const button = screen.getByText('View Data');
        fireEvent.click(button);

        expect(onViewData).toHaveBeenCalled();
    });
});
