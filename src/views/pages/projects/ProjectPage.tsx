import { IProjectPageProps } from './IProjectPageProps';
import React from 'react';
import { FlexLayout } from '../../bases/layout/FlexLayout';
import { Text } from '../../bases/text/Text';
import { Button } from '../../bases/button/Button';

export const ProjectPage = ({}: IProjectPageProps) => (
    <FlexLayout
        styles={{
            flexDirection: 'column',
        }}
    >
        <Text>Create a project to get started</Text>
        <Button disabled={false} onClick={() => {}}>
            Create Project
        </Button>
    </FlexLayout>
);
