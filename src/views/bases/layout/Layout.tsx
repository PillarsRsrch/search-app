import React from 'react';
import { VStack } from '@chakra-ui/react';
import { ILayoutProps } from './ILayoutProps';

export const Layout = ({ styles, children }: ILayoutProps) => (
    <VStack sx={{ ...styles, boxSizing: 'border-box' }}>{children}</VStack>
);
