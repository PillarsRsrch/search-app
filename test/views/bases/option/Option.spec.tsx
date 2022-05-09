import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Option } from '../../../../src/views/bases/option/Option';

describe('Option Test Suite', () => {
    test('Should render an option component', () => {
        const onSelect = jest.fn();
        render(<Option value="value" onSelect={onSelect} />);

        const text = screen.getByText('value');

        expect(text).toBeInTheDocument();
    });

    test('Should call the on select function', () => {
        const onSelect = jest.fn();
        render(<Option value="value" onSelect={onSelect} />);

        const text = screen.getByText('value');
        fireEvent.click(text);

        expect(onSelect).toHaveBeenCalledWith('value');
    });
});
