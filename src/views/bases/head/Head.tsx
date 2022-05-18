import React from 'react';
import IHeadProps from './IHeadProps';
import NextHead from 'next/head';

export const Head = ({ title }: IHeadProps) => {
    return (
        <NextHead>
            <title>{title}</title>
            <meta name="description" content="Pillars Research Services" />
            <link rel="icon" href="/favicon.ico" />
        </NextHead>
    );
};
