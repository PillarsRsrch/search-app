import { IInputProps } from './IInputProps';
import { Input as ChakraInput } from '@chakra-ui/react';
import React from 'react';

export const Input = ({ onChange, value }: IInputProps) => {
    return (
        <ChakraInput
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-input-component"
        />
    );
};
