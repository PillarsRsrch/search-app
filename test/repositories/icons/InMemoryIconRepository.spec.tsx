import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { InMemoryIconRepository } from '../../../src/repositories/icons/InMemoryIconRepository';

describe('In Memory Icon Repository Test Suite', () => {
    const repository = new InMemoryIconRepository(
        new Map([['times', <span></span>]])
    );

    test('Should get element by id', () => {
        const { container } = render(repository.getById('times'));

        const icon = container.getElementsByTagName('span')[0];

        expect(icon).toBeInTheDocument();
    });
});
