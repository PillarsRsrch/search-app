import { IInputProps } from './IInputProps';
import { Input as ChakraInput } from '@chakra-ui/react';
import React from 'react';

export const Input = ({
    onChange,
    value,
    type,
    name,
    placeholder,
}: IInputProps) => {
    return (
        <ChakraInput
            value={value}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={(e) => onChange(e.target.value)}
            className="input-component"
        />
    );
};
