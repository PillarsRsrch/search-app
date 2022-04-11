import React from 'react';
import { IHeadingProps } from './IHeadingProps';
import { Heading as ChakraHeading, As } from '@chakra-ui/react';

export const Heading = ({ children, level }: IHeadingProps) => (
    <ChakraHeading as={`h${level}` as As<any>}>{children}</ChakraHeading>
);
