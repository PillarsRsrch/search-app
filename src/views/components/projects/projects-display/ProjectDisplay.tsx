import React from 'react';
import { IProjectDisplayProps } from './IProjectDisplayProps';
import { ProjectDisplayState } from './ProjectDisplayState';
import { ProjectDisplayLayout } from './ProjectDisplayLayout';
import { ProjectDisplayLoadingFragment } from './ProjectDisplayLoadingFragment';
import { ProjectDisplayEmptyFragment } from './ProjectDisplayEmptyFragment';
import { ProjectDisplayAllProjectsFragment } from './ProjectDisplayAllProjectsFragment';
import { useProjects } from './useProjects';

export const ProjectDisplay = ({
    projectsService,
    onCreateProject,
}: IProjectDisplayProps) => {
    const [projects, displayState] = useProjects(projectsService);
    const projectDisplayFragmentLookup = new Map([
        [ProjectDisplayState.Loading, <ProjectDisplayLoadingFragment />],
        [
            ProjectDisplayState.FoundNoProjects,
            <ProjectDisplayEmptyFragment onClick={onCreateProject} />,
        ],
        [
            ProjectDisplayState.FoundProjects,
            <ProjectDisplayAllProjectsFragment
                projects={projects}
                createProject={onCreateProject}
            />,
        ],
    ]);

    return (
        <ProjectDisplayLayout>
            {projectDisplayFragmentLookup.get(displayState)}
        </ProjectDisplayLayout>
    );
};
