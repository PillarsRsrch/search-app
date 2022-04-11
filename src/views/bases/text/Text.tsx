import React from 'react';
import { ITextProps } from './ITextProps';
import { Text as ChakraText } from '@chakra-ui/react';

export const Text = ({ children }: ITextProps) => (
    <ChakraText>{children}</ChakraText>
);
