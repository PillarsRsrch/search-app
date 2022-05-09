import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { CreateProjectPage } from '../../../../src/views/pages/projects/create-project/CreateProjectPage';
import { anything, instance, mock, reset, verify } from 'ts-mockito';
import { IProjectService } from '../../../../src/services/foundations/projects/IProjectService';

describe('Create Project Page Test Suite', () => {
    const mockedProjectService = mock<IProjectService>();
    const projectService = instance(mockedProjectService);

    beforeEach(() => {
        reset(mockedProjectService);
    });

    test('Should create a project when the form is submitted', () => {
        const { container } = render(
            <CreateProjectPage projectService={projectService} />
        );

        const projectNameInput = container.querySelector(
            `input[name="projectName"]`
        ) as Element;
        const submit = container.getElementsByTagName('button')[0];
        expect(projectNameInput).toBeInTheDocument();
        fireEvent.change(projectNameInput, {
            target: {
                value: 'name',
            },
        });
        fireEvent.click(submit);

        verify(mockedProjectService.createProjectAsync(anything())).once();
    });
});
