import React from 'react';
import { VStack } from '@chakra-ui/react';
import { ILayoutProps } from './ILayoutProps';

export const Layout = ({ children }: ILayoutProps) => (
    <VStack>{children}</VStack>
);
