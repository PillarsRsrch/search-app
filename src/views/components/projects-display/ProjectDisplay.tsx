import { IProjectDisplayProps } from './IProjectDisplayProps';
import React, { useEffect, useState } from 'react';
import { ProjectDisplayState } from './ProjectDisplayState';
import { ProjectDisplayLayout } from './ProjectDisplayLayout';
import { ProjectDisplayLoadingFragment } from './ProjectDisplayLoadingFragment';
import { ProjectDisplayEmptyFragment } from './ProjectDisplayEmptyFragment';
import { ProjectDisplayAllProjectsFragment } from './ProjectDisplayAllProjectsFragment';

export const ProjectDisplay = ({ projectsService }: IProjectDisplayProps) => {
    const [projects, setProjects] = useState<any[]>([]);
    const [displayState, setDisplayState] = useState(
        ProjectDisplayState.Loading
    );
    const projectDisplayFragmentLookup = new Map([
        [ProjectDisplayState.Loading, <ProjectDisplayLoadingFragment />],
        [
            ProjectDisplayState.FoundNoProjects,
            <ProjectDisplayEmptyFragment onClick={createProject} />,
        ],
        [
            ProjectDisplayState.FoundProjects,
            <ProjectDisplayAllProjectsFragment
                projects={projects}
                createProject={createProject}
            />,
        ],
    ]);

    function createProject() {}

    function getStateFromProjects(projects: any[]) {
        return projects.length === 0
            ? ProjectDisplayState.FoundNoProjects
            : ProjectDisplayState.FoundProjects;
    }

    useEffect(() => {
        const fetchProjects = async () => {
            setDisplayState(ProjectDisplayState.Loading);
            const projects = await projectsService.getAllServicesAsync();
            setProjects(projects);
            setDisplayState(getStateFromProjects(projects));
        };

        fetchProjects();
    }, []);

    return (
        <ProjectDisplayLayout>
            {projectDisplayFragmentLookup.get(displayState)}
        </ProjectDisplayLayout>
    );
};
