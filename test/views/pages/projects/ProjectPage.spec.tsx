import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { instance, mock, reset, when } from 'ts-mockito';
import { IProjectsService } from '../../../../src/services/foundations/projects/IProjectsService';
import { ProjectPage } from '../../../../src/views/pages/projects/ProjectPage';

describe('Project Page Test Stuite', () => {
    const mockProjectService = mock<IProjectsService>();
    const projectService = instance(mockProjectService);

    beforeEach(() => {
        reset(mockProjectService);
    });

    test('Should render project page when empty with no projects', () => {
        when(mockProjectService.getAllServicesAsync()).thenResolve([]);
        const { container } = render(
            <ProjectPage projectService={projectService} />
        );

        const projectComponent = container.getElementsByClassName(
            'project-display-component'
        )[0];

        expect(projectComponent).toBeInTheDocument();
    });
});
