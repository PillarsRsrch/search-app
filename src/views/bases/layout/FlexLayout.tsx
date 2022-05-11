import React from 'react';
import { Flex } from '@chakra-ui/react';
import { IFlexLayoutProps } from './IFlexLayoutProps';

export const FlexLayout = ({
    styles,
    children,
    className,
    onClick,
}: IFlexLayoutProps) => (
    <Flex
        onClick={onClick}
        className={className}
        sx={{ ...styles, gap: '25px', boxSizing: 'border-box' }}
    >
        {children}
    </Flex>
);
