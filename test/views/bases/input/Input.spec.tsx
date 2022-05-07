import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from '../../../../src/views/bases/input/Input';

describe('Text Input Test Suite', () => {
    test('Should call the on change function when text input changes', () => {
        const onChange = jest.fn();
        const { container } = render(
            <Input
                placeholder=""
                type="text"
                name="name"
                value=""
                onChange={onChange}
            />
        );

        const input = container.getElementsByClassName('input-component')[0];
        fireEvent.change(input, {
            target: {
                value: 'a',
            },
        });

        expect(onChange).toHaveBeenCalled();
    });
});
