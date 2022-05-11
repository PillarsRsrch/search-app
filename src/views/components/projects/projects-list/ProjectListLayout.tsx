import React from 'react';
import { FlexLayout } from '../../../bases/layout/FlexLayout';
import { IProjectListLayoutProps } from './IProjectListLayoutProps';

export const ProjectListLayout = ({ children }: IProjectListLayoutProps) => (
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
