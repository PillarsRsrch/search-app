import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Center } from '../../../../src/views/bases/center/Center';

describe('Center Test Suite', () => {
    test('Should render a center component', () => {
        render(
            <Center>
                <p>Text</p>
            </Center>
        );

        const text = screen.getByText('Text');

        expect(text).toBeInTheDocument();
    });
});
