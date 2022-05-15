import React from 'react';
import { HorizontallyCenteredLayout } from '../../layouts/centered/HorizontallyCenteredLayout';
import { IProjectViewProps } from './IProjectViewProps';
import { ProjectViewFragment } from './ProjectViewFragment';
import { ProjectViewLoadingFragment } from './ProjectViewLoadingFragment';
import { ProjectHookState } from '../../../../hooks/projects/ProjectHookState';
import { useProject } from '../../../../hooks/projects/useProject';

export const ProjectView = ({
    projectService,
    projectId,
    onViewData,
}: IProjectViewProps) => {
    const [project, state] = useProject(projectService, projectId);
    const fragmentMap = new Map([
        [ProjectHookState.Loading, <ProjectViewLoadingFragment />],
        [
            ProjectHookState.LoadedProject,
            <ProjectViewFragment onViewData={onViewData} project={project!} />,
        ],
    ]);

    return (
        <>
            <HorizontallyCenteredLayout>
                {fragmentMap.get(state)}
            </HorizontallyCenteredLayout>
        </>
    );
};
