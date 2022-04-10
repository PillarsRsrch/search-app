import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { IconRepository } from '../../../src/repositories/icons/IconRepository';

describe('Icon Repository Test Suite', () => {
    const repository = new IconRepository(new Map([['times', <span></span>]]));

    test('Should get element by id', () => {
        const { container } = render(repository.getById('times'));

        const icon = container.getElementsByTagName('span')[0];

        expect(icon).toBeInTheDocument();
    });
});
