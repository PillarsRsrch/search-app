import { IInputProps } from './IInputProps';
import React from 'react';
import { StyledInputContainer } from './StyledInputContainer';
import { Input as ChakraInput } from '@chakra-ui/react';

export const Input = ({
    onChange,
    value,
    type,
    name,
    placeholder,
}: IInputProps) => {
    return (
        <StyledInputContainer>
            <ChakraInput
                value={value}
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={(e) => onChange(e.target.value)}
                className="input-component"
            />
        </StyledInputContainer>
    );
};
