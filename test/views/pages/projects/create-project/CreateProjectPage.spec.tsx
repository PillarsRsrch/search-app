import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { CreateProjectPage } from '../../../../../src/views/pages/projects/create-project/CreateProjectPage';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { IProjectService } from '../../../../../src/services/foundations/projects/IProjectService';
import { IProjectMapper } from '../../../../../src/mappers/project/IProjectMapper';
import { IForm } from '../../../../../src/models/form/IForm';
import { IRouterService } from '../../../../../src/services/foundations/router/IRouterService';

describe('Create Project Page Test Suite', () => {
    const mockedProjectService = mock<IProjectService>();
    const mockedRouterService = mock<IRouterService>();
    const mockedProjectMapper = mock<IProjectMapper<IForm>>();
    const projectService = instance(mockedProjectService);
    const projectMapper = instance(mockedProjectMapper);
    const routerService = instance(mockedRouterService);

    beforeEach(() => {
        reset(mockedProjectService);
        reset(mockedRouterService);
        reset(mockedProjectMapper);
    });

    test('Should create a project when the form is submitted', async () => {
        when(mockedRouterService.navigate(anything())).thenReturn();
        const { container } = render(
            <CreateProjectPage
                routerService={routerService}
                projectMapper={projectMapper}
                projectService={projectService}
            />
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

        await verify(
            mockedProjectService.createProjectAsync(anything())
        ).once();
        verify(mockedRouterService.navigate(anything())).once();
    });
});
