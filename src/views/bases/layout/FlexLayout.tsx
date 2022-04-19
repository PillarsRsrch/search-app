import React from 'react';
import { Flex } from '@chakra-ui/react';
import { IFlexLayoutProps } from './IFlexLayoutProps';

export const FlexLayout = ({
    styles,
    children,
    className,
}: IFlexLayoutProps) => (
    <Flex className={className} sx={{ ...styles, boxSizing: 'border-box' }}>
        {children}
    </Flex>
);
