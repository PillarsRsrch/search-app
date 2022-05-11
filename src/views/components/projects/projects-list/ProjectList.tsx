import React from 'react';
import { IProjectListProps } from './IProjectListProps';
import { ProjectListState } from './ProjectListState';
import { ProjectListLayout } from './ProjectListLayout';
import { ProjectListLoadingFragment } from './ProjectListLoadingFragment';
import { ProjectEmptyListFragment } from './ProjectEmptyListFragment';
import { ProjectListFragment } from './ProjectListFragment';
import { useProjects } from './useProjects';

export const ProjectList = ({
    projectsService,
    onCreateProject,
}: IProjectListProps) => {
    const [projects, displayState] = useProjects(projectsService);
    const projectDisplayFragmentLookup = new Map([
        [ProjectListState.Loading, <ProjectListLoadingFragment />],
        [
            ProjectListState.FoundNoProjects,
            <ProjectEmptyListFragment onClick={onCreateProject} />,
        ],
        [
            ProjectListState.FoundProjects,
            <ProjectListFragment
                projects={projects}
                createProject={onCreateProject}
            />,
        ],
    ]);

    return (
        <ProjectListLayout>
            {projectDisplayFragmentLookup.get(displayState)}
        </ProjectListLayout>
    );
};
