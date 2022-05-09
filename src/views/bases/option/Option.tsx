import React from 'react';
import { IOptionProps } from './IOptionProps';
import { StyledOption } from './StyledOption';

export function Option({ value, onSelect }: IOptionProps) {
    return (
        <StyledOption
            className="option-component"
            onClick={() => onSelect(value)}
        >
            {value}
        </StyledOption>
    );
}
