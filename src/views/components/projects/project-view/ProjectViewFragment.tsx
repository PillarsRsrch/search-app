import React from 'react';
import { Button } from '../../../bases/button/Button';
import { Heading } from '../../../bases/header/Heading';
import { IProjectViewFragmentProps } from './IProjectViewFragmentProps';

export const ProjectViewFragment = ({
    project,
    onViewData: onViewDataManagementPlan,
}: IProjectViewFragmentProps) => (
    <>
        <Heading level={2}>{project.name()}</Heading>
        <Button
            onClick={() => onViewDataManagementPlan(project)}
            disabled={false}
        >
            View Data
        </Button>
    </>
);
