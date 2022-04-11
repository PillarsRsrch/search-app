import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from '../../../../src/views/bases/card/Card';

describe('Card', () => {
    test('Should render a card', () => {
        render(
            <Card>
                <p>Text</p>
            </Card>
        );

        const text = screen.getByText('Text');

        expect(text).toBeInTheDocument();
    });
});
