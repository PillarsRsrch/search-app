import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../../../../src/views/bases/button/Button';

describe('Button Test Suite', () => {
    test('Should render an enabled button', () => {
        render(
            <Button disabled={false} onClick={() => {}}>
                Text
            </Button>
        );

        const button: HTMLButtonElement = screen.getByText('Text');

        expect(button).toBeInTheDocument();
        expect(button.textContent).toEqual('Text');
        expect(button.disabled).toBeFalsy();
    });

    test('Should render a disabled button', () => {
        render(
            <Button disabled={true} onClick={() => {}}>
                Text
            </Button>
        );

        const button: HTMLButtonElement = screen.getByText('Text');

        expect(button).toBeInTheDocument();
        expect(button.textContent).toEqual('Text');
        expect(button.disabled).toBeTruthy();
    });

    test('calls onClick prop when clicked', () => {
        const handleClick = jest.fn();
        render(
            <Button disabled={false} onClick={handleClick}>
                Text
            </Button>
        );
        fireEvent.click(screen.getByText('Text'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
