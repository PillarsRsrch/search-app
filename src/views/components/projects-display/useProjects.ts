import { useEffect, useState } from 'react';
import { IProject } from '../../../models/projects/IProject';
import { IProjectsService } from '../../../services/foundations/projects/IProjectsService';
import { ProjectDisplayState } from './ProjectDisplayState';

export function useProjects(
    projectsService: IProjectsService
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
            const projects = await projectsService.getAllServicesAsync();
            setProjects(projects);
            setDisplayState(getStateFromProjects(projects));
        };

        fetchProjects();
    }, []);

    return [projects, displayState];
}
