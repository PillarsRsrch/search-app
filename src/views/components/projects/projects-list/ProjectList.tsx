import React from 'react';
import { IProjectListProps } from './IProjectListProps';
import { ProjectListState } from '../../../../hooks/projects/ProjectListState';
import { ProjectListLoadingFragment } from './ProjectListLoadingFragment';
import { ProjectEmptyListFragment } from './ProjectEmptyListFragment';
import { ProjectListFragment } from './ProjectListFragment';
import { useProjectList } from '../../../../hooks/projects/useProjectList';

export const ProjectList = ({
    projectsService,
    onCreateProject,
    onViewProject,
}: IProjectListProps) => {
    const [projects, state] = useProjectList(projectsService);
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
