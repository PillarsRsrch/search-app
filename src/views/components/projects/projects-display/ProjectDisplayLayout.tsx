import React from 'react';
import { FlexLayout } from '../../../bases/layout/FlexLayout';
import { IProjectDisplayLayoutProps } from './IProjectDisplayLayoutProps';

export const ProjectDisplayLayout = ({
    children,
}: IProjectDisplayLayoutProps) => (
    <FlexLayout
        className="project-display-component"
        styles={{
            alignItems: 'center',
            flexDirection: 'column',
        }}
    >
        {children}
    </FlexLayout>
);
