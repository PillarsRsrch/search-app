import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Select } from '../../../../src/views/bases/select/Select';

describe('Select Test Suite', () => {
    test('Should render select with default value', () => {
        render(
            <Select value={'value'} options={['a', 'b']} onSelect={() => {}} />
        );

        const text = screen.getByText('value');

        expect(text).toBeInTheDocument();
        expect(screen.queryByText('a')).toBeNull();
        expect(screen.queryByText('b')).toBeNull();
    });

    test('Should render all options on focus', async () => {
        render(
            <Select value={'value'} options={['a', 'b']} onSelect={() => {}} />
        );
        expect(screen.queryByText('a')).toBeNull();
        expect(screen.queryByText('b')).toBeNull();

        const text = screen.getByText('value');
        fireEvent.focus(text);

        const optionA = screen.getByText('a');
        const optionB = screen.getByText('b');
        expect(optionA).toBeInTheDocument();
        expect(optionB).toBeInTheDocument();
        expect(text).toBeInTheDocument();
    });

    test('Should unrender all options on blur', async () => {
        render(
            <Select value={'value'} options={['a', 'b']} onSelect={() => {}} />
        );
        expect(screen.queryByText('a')).toBeNull();
        expect(screen.queryByText('b')).toBeNull();

        const text = screen.getByText('value');
        fireEvent.focus(text);
        expect(screen.queryByText('a')).not.toBeNull();
        expect(screen.queryByText('b')).not.toBeNull();
        fireEvent.blur(text);

        expect(text).toBeInTheDocument();
        expect(screen.queryByText('a')).toBeNull();
        expect(screen.queryByText('b')).toBeNull();
    });

    test('Should call on select when an option is selected', () => {
        const onSelect = jest.fn();
        render(
            <Select value={'value'} options={['a', 'b']} onSelect={onSelect} />
        );

        const text = screen.getByText('value');
        fireEvent.focus(text);
        const a = screen.getByText('a');
        fireEvent.click(a);

        expect(onSelect).toHaveBeenCalledWith('a');
        expect(screen.queryByText('a')).toBeNull();
        expect(screen.queryByText('b')).toBeNull();
    });
});
