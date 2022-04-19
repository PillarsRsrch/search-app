import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProjectPage } from '../../../../src/views/pages/projects/ProjectPage';

describe('Project Page Test Stuite', () => {
    test('Should render project page when empty with no projects', () => {
        const { container } = render(<ProjectPage />);

        const noProjectsText = screen.getByText(
            'Create a project to get started'
        );
        const createProjectButton =
            container.getElementsByClassName('button-component')[0];

        expect(noProjectsText).toBeInTheDocument();
        expect(createProjectButton).toBeInTheDocument();
    });
});
