import { ILabelProps } from './ILabelProps';
import React from 'react';

export const Label = ({ value, children }: ILabelProps) => (
    <label>
        {value}
        {children}
    </label>
);
