import React from 'react';
import { Layout } from '../layout/Layout';
import { ICardProps } from './ICardProps';

export const Card = ({ width, height, children }: ICardProps) => (
    <Layout
        styles={{
            width: width,
            height: height,
            border: '1px solid rgb(200, 200, 200)',
            borderRadius: '4px',
            padding: '10px 25px',
        }}
    >
        {children}
    </Layout>
);
