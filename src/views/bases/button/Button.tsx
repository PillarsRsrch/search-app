import React from 'react';
import { IButtonProps } from './IButtonProps';
import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = ({
    children,
    onClick,
    disabled,
}: IButtonProps): JSX.Element => (
    <ChakraButton
        className="button-component"
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </ChakraButton>
);
