import React from 'react';
import { IProjectListProps } from './IProjectListProps';
import { ProjectListState } from './ProjectListState';
import { ProjectListLoadingFragment } from './ProjectListLoadingFragment';
import { ProjectEmptyListFragment } from './ProjectEmptyListFragment';
import { ProjectListFragment } from './ProjectListFragment';
import { useProjects } from './useProjects';

export const ProjectList = ({
    projectsService,
    onCreateProject,
    onViewProject,
}: IProjectListProps) => {
    const [projects, state] = useProjects(projectsService);
    const projectDisplayFragmentLookup = new Map([
        [ProjectListState.Loading, <ProjectListLoadingFragment />],
        [
            ProjectListState.FoundNoProjects,
            <ProjectEmptyListFragment onClick={onCreateProject} />,
        ],
        [
            ProjectListState.FoundProjects,
            <ProjectListFragment
                viewProject={onViewProject}
                projects={projects}
                createProject={onCreateProject}
            />,
        ],
    ]);

    return <>{projectDisplayFragmentLookup.get(state)}</>;
};
