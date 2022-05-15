import React from 'react';
import { HorizontallyCenteredLayout } from '../../layouts/centered/HorizontallyCenteredLayout';
import { IProjectViewProps } from './IProjectViewProps';
import { ProjectViewFragment } from './ProjectViewFragment';
import { ProjectViewLoadingFragment } from './ProjectViewLoadingFragment';
import { ProjectViewState } from './ProjectViewState';
import { useProject } from './useProject';

export const ProjectView = ({
    projectService,
    projectId,
    onViewData,
}: IProjectViewProps) => {
    const [project, state] = useProject(projectService, projectId);
    const fragmentMap = new Map([
        [ProjectViewState.Loading, <ProjectViewLoadingFragment />],
        [
            ProjectViewState.LoadedProject,
            <ProjectViewFragment onViewData={onViewData} project={project} />,
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
