import React from 'react';
import { IButtonProps } from './IButtonProps';

export const Button = ({
    children,
    onClick,
    disabled,
}: IButtonProps): JSX.Element => (
    <button onClick={onClick} disabled={disabled}>
        {children}
    </button>
);
