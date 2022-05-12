import React from 'react';
import { FlexLayout } from '../../../bases/layout/FlexLayout';
import { ICenteredLayoutProps } from './ICenteredLayoutProps';

export const HorizontallyCenteredLayout = ({
    children,
}: ICenteredLayoutProps) => {
    return (
        <FlexLayout
            className="horizontally-centered-layout"
            styles={{
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            {children}
        </FlexLayout>
    );
};
