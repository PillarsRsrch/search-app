import { ILabelProps } from './ILabelProps';
import React from 'react';
import { StyledLabel } from './StyledLabel';
import { Text } from '../text/Text';

export const Label = ({ value, children }: ILabelProps) => (
    <StyledLabel>
        <Text>{value}</Text>
        {children}
    </StyledLabel>
);
