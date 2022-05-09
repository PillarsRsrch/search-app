import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { CreateProjectPage } from '../../../../src/views/pages/projects/create-project/CreateProjectPage';

describe('Create Project Page Test Suite', () => {
    test('Should render create project page with expected components', () => {
        render(<CreateProjectPage />);
    });
});
