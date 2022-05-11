import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from '../../../../src/views/bases/card/Card';

describe('Card', () => {
    test('Should render a card', () => {
        render(
            <Card width="100" height="100">
                <p>Text</p>
            </Card>
        );

        const text = screen.getByText('Text');

        expect(text).toBeInTheDocument();
    });

    test('Should call click handler when clicking a card', () => {
        const onClick = jest.fn();
        render(
            <Card width="100" height="100" onClick={onClick}>
                <p>Text</p>
            </Card>
        );

        const text = screen.getByText('Text');
        fireEvent.click(text);

        expect(text).toBeInTheDocument();
        expect(onClick).toHaveBeenCalled();
    });
});
