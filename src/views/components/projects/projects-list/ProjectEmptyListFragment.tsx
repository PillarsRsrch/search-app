import React from 'react';
import { Button } from '../../../bases/button/Button';
import { Text } from '../../../bases/text/Text';
import { IProjectEmptyListFragmentProps } from './IProjectEmptyListFragmentProps';

export const ProjectEmptyListFragment = ({
    onClick,
}: IProjectEmptyListFragmentProps) => (
    <>
        <Text>You have no projects. Create a new project to get started</Text>
        <Button onClick={onClick} disabled={false}>
            Create Project
        </Button>
    </>
);
