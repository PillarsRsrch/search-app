import React from 'react';
import { IProjectListProps } from './IProjectListProps';
import { ProjectListHookState } from '../../../../hooks/projects/ProjectListHookState';
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
        [ProjectListHookState.Loading, <ProjectListLoadingFragment />],
        [
            ProjectListHookState.FoundNoProjects,
            <ProjectEmptyListFragment onClick={onCreateProject} />,
        ],
        [
            ProjectListHookState.FoundProjects,
            <ProjectListFragment
                viewProject={onViewProject}
                projects={projects}
                createProject={onCreateProject}
            />,
        ],
    ]);

    return <>{projectDisplayFragmentLookup.get(state)}</>;
};
