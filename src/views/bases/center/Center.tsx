import React from 'react';
import { ICenterProps } from './ICenterProps';
import { Center as ChakraCenter } from '@chakra-ui/react';

export const Center = ({ children }: ICenterProps) => (
    <ChakraCenter>{children}</ChakraCenter>
);
