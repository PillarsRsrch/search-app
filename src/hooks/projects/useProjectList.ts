import { useEffect, useState } from 'react';
import { IProject } from '../../models/projects/IProject';
import { IProjectService } from '../../services/foundations/projects/IProjectService';
import { ProjectListHookState } from './ProjectListHookState';

export function useProjectList(
    projectsService: IProjectService
): [IProject[], ProjectListHookState] {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [state, setState] = useState(ProjectListHookState.Loading);

    function getStateFromProjects(projects: IProject[]) {
        return projects.length === 0
            ? ProjectListHookState.FoundNoProjects
            : ProjectListHookState.FoundProjects;
    }

    useEffect(() => {
        const fetchProjects = async () => {
            setState(ProjectListHookState.Loading);
            const projects = await projectsService.getAllProjectsAsync();
            setProjects(projects);
            setState(getStateFromProjects(projects));
        };

        fetchProjects();
    }, []);

    return [projects, state];
}
