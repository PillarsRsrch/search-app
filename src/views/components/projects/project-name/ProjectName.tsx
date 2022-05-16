import React from 'react';
import { ProjectState } from '../../../../hooks/projects/ProjectState';
import { useProject } from '../../../../hooks/projects/useProject';
import { Heading } from '../../../bases/header/Heading';
import { IProjectNameProps } from './IProjectNameProps';

export const ProjectName = ({
    projectId,
    projectService,
}: IProjectNameProps) => {
    const [project, projectState] = useProject(projectService, projectId);

    const componentMap = new Map([
        [ProjectState.Loading, <Heading level={1}>Loading...</Heading>],
        [
            ProjectState.LoadedProject,
            <Heading level={1}>{project ? project.name() : ''} Data</Heading>,
        ],
        [
            ProjectState.ProjectNotFound,
            <Heading level={1}>Project Not Found</Heading>,
        ],
    ]);

    return <>{componentMap.get(projectState)}</>;
};
