import { useEffect, useState } from 'react';
import { IProject } from '../../../../models/projects/IProject';
import { IProjectService } from '../../../../services/foundations/projects/IProjectService';
import { ProjectDisplayState } from './ProjectDisplayState';

export function useProjects(
    projectsService: IProjectService
): [IProject[], ProjectDisplayState] {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [displayState, setDisplayState] = useState(
        ProjectDisplayState.Loading
    );

    function getStateFromProjects(projects: IProject[]) {
        return projects.length === 0
            ? ProjectDisplayState.FoundNoProjects
            : ProjectDisplayState.FoundProjects;
    }

    useEffect(() => {
        const fetchProjects = async () => {
            setDisplayState(ProjectDisplayState.Loading);
            const projects = await projectsService.getAllProjectsAsync();
            setProjects(projects);
            setDisplayState(getStateFromProjects(projects));
        };

        fetchProjects();
    }, []);

    return [projects, displayState];
}
