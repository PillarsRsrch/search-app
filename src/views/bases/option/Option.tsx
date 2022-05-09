import React from 'react';
import { IOptionProps } from './IOptionProps';

export function Option({ value, onSelect }: IOptionProps) {
    return (
        <div className="option-component" onClick={() => onSelect(value)}>
            {value}
        </div>
    );
}
