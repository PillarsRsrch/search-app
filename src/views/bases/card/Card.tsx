import React from 'react';
import { FlexLayout } from '../layout/FlexLayout';
import { ICardProps } from './ICardProps';

export const Card = ({ width, height, children, onClick }: ICardProps) => (
    <FlexLayout
        onClick={onClick}
        className="card-component"
        styles={{
            width: width,
            height: height,
            border: '1px solid rgb(200, 200, 200)',
            borderRadius: '4px',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px 25px',
        }}
    >
        {children}
    </FlexLayout>
);
