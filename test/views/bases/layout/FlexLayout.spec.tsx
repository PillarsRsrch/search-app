import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { FlexLayout } from '../../../../src/views/bases/layout/FlexLayout';

describe('Flex Layout Test Suite', () => {
    test('Should render a layout component', () => {
        render(
            <FlexLayout
                className="flex-layout"
                styles={{
                    borderRadius: '2px',
                    border: '1px',
                    width: '10px',
                    height: '10px',
                    padding: '0',
                    flexDirection: 'row',
                    alignItems: '',
                }}
            >
                <p>Text</p>
            </FlexLayout>
        );

        const text = screen.getByText('Text');

        expect(text).toBeInTheDocument();
    });

    test('Should call onClick when clicking a layout component', () => {
        const onClick = jest.fn();
        render(
            <FlexLayout
                className="flex-layout"
                onClick={onClick}
                styles={{
                    borderRadius: '2px',
                    border: '1px',
                    width: '10px',
                    height: '10px',
                    padding: '0',
                    flexDirection: 'row',
                    alignItems: '',
                }}
            >
                <p>Text</p>
            </FlexLayout>
        );

        const text = screen.getByText('Text');
        fireEvent.click(text);

        expect(text).toBeInTheDocument();
        expect(onClick).toHaveBeenCalled();
    });
});
