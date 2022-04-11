import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from '../../../../src/views/bases/header/Heading';

describe('Header', () => {
    test('Should render a heading', () => {
        const { container } = render(<Heading level={2}>Heading</Heading>);

        const text = container.getElementsByTagName('h2')[0];

        expect(text).toBeInTheDocument();
    });
});
