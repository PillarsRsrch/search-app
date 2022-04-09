import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Text } from '../../../../src/views/bases/text/Text';

describe('Text Test Suite', () => {
    test('Should render a text component with some text', () => {
        render(<Text>Some text</Text>);

        const text = screen.getByText('Some text');

        expect(text).toBeInTheDocument();
    });
});
