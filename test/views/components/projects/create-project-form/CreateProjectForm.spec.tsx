import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { CreateProjectForm } from '../../../../../src/views/components/projects/create-project-form/CreateProjectForm';
import { anything, instance, mock, reset, verify } from 'ts-mockito';
import { IProjectMapper } from '../../../../../src/mappers/project/IProjectMapper';

describe('Create Project Form Test Suite', () => {
    const mockedProjectMapper = mock<IProjectMapper>();
    const projectMapper = instance(mockedProjectMapper);

    beforeEach(() => {
        reset(mockedProjectMapper);
    });

    test('Should render the form with fields for project name, funding institute, project type, data source', () => {
        render(
            <CreateProjectForm
                projectMapper={projectMapper}
                onSubmit={() => {}}
            />
        );

        const projectNameLabel = screen.getByText('Project Name');
        const fundingInstituteLabel = screen.getByText('Funding Institute');
        const projectFieldLabel = screen.getByText('Project Field');
        const dataSourceLabel = screen.getByText('Data Source');
        expect(projectNameLabel).toBeInTheDocument();
        expect(fundingInstituteLabel).toBeInTheDocument();
        expect(projectFieldLabel).toBeInTheDocument();
        expect(dataSourceLabel).toBeInTheDocument();
    });

    test('Should call the onSubmit function', () => {
        const onSubmit = jest.fn();
        render(
            <CreateProjectForm
                projectMapper={projectMapper}
                onSubmit={onSubmit}
            />
        );

        const submit = screen.getByText('Submit');
        fireEvent.click(submit);

        verify(mockedProjectMapper.fromForm(anything())).once();
        expect(onSubmit).toHaveBeenCalled();
    });
});
