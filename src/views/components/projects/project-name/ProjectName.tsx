import React from 'react';
import { ProjectState } from '../../../../hooks/projects/ProjectState';
import { useProject } from '../../../../hooks/projects/useProject';
import { Text } from '../../../bases/text/Text';
import { IProjectNameProps } from './IProjectNameProps';

export const ProjectName = ({
    projectId,
    projectService,
}: IProjectNameProps) => {
    const [project, projectState] = useProject(projectService, projectId);
    console.log(project, projectState);

    const componentMap = new Map([
        [ProjectState.Loading, <Text>Loading...</Text>],
        [
            ProjectState.LoadedProject,
            <Text>{project ? project.name() : ''} Data</Text>,
        ],
        [ProjectState.ProjectNotFound, <Text>Project Not Found</Text>],
    ]);

    return <>{componentMap.get(projectState)}</>;
};
