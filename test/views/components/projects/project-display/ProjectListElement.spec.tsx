import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { instance, mock, reset, when } from 'ts-mockito';
import { IProject } from '../../../../../src/models/projects/IProject';
import { ProjectListElement } from '../../../../../src/views/components/projects/projects-list/ProjectListElement';
import { FundingInstituteTypes } from '../../../../../src/models/projects/FundingInstituteTypes';
import { ScientificFieldTypes } from '../../../../../src/models/projects/ScientificFieldTypes';

describe('Project List Element Test Suite', () => {
    const mockedProject = mock<IProject>();
    const project = instance(mockedProject);

    beforeEach(() => {
        reset(mockedProject);
    });

    test('Should render a project list element', () => {
        const viewProject = jest.fn();
        when(mockedProject.name()).thenReturn('Project Name');
        when(mockedProject.fundingInstitute()).thenReturn(
            FundingInstituteTypes.NationalScienceFoundation
        );
        when(mockedProject.field()).thenReturn(
            ScientificFieldTypes.Engineering
        );

        render(
            <ProjectListElement viewProject={viewProject} project={project} />
        );

        const name = screen.getByText('Project Name');
        const field = screen.getByText('Engineering');
        const fundingInstitute = screen.getByText(
            'National Science Foundation'
        );
        expect(name).toBeInTheDocument();
        expect(field).toBeInTheDocument();
        expect(fundingInstitute).toBeInTheDocument();
    });

    test('Should click on a project list element', () => {
        const viewProject = jest.fn();
        when(mockedProject.name()).thenReturn('Project Name');
        when(mockedProject.fundingInstitute()).thenReturn(
            FundingInstituteTypes.NationalScienceFoundation
        );
        when(mockedProject.field()).thenReturn(
            ScientificFieldTypes.Engineering
        );

        render(
            <ProjectListElement viewProject={viewProject} project={project} />
        );
        const name = screen.getByText('Project Name');
        fireEvent.click(name);

        expect(name).toBeInTheDocument();
        expect(viewProject).toHaveBeenCalled();
    });
});
