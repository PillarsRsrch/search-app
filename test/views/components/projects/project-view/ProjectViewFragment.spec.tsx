import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { instance, mock, when } from 'ts-mockito';
import { IProject } from '../../../../../src/models/projects/IProject';
import { ProjectViewFragment } from '../../../../../src/views/components/projects/project-view/ProjectViewFragment';

describe('Project View Fragment Test Suite', () => {
    const mockedProject = mock<IProject>();
    const project = instance(mockedProject);

    test('Should render project view fragment', () => {
        const onViewDataManagementPlan = jest.fn();
        when(mockedProject.name()).thenReturn('Project Name');

        render(
            <ProjectViewFragment
                project={project}
                onViewData={onViewDataManagementPlan}
            />
        );

        expect(screen.getByText('Project Name')).toBeInTheDocument();
        expect(screen.getByText('View Data')).toBeInTheDocument();
    });

    test('When clicking the view data management button it should call the listener', () => {
        const onViewDataManagementPlan = jest.fn();
        when(mockedProject.name()).thenReturn('Project Name');

        render(
            <ProjectViewFragment
                project={project}
                onViewData={onViewDataManagementPlan}
            />
        );
        const button = screen.getByText('View Data');
        fireEvent.click(button);

        expect(onViewDataManagementPlan).toHaveBeenCalled();
    });
});
