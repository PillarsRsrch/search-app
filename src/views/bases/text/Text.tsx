import React from 'react';
import { ITextProps } from './ITextProps';
import { StyledText } from './StyledText';

export const Text = ({ children }: ITextProps) => (
    <StyledText>{children}</StyledText>
);
