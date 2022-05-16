import { useEffect, useState } from 'react';
import { IProject } from '../../models/projects/IProject';
import { IProjectService } from '../../services/foundations/projects/IProjectService';
import { ProjectListState } from './ProjectListState';

export function useProjectList(
    projectsService: IProjectService
): [IProject[], ProjectListState] {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [state, setState] = useState(ProjectListState.Loading);

    function getStateFromProjects(projects: IProject[]) {
        return projects.length === 0
            ? ProjectListState.FoundNoProjects
            : ProjectListState.FoundProjects;
    }

    useEffect(() => {
        const fetchProjects = async () => {
            setState(ProjectListState.Loading);
            const projects = await projectsService.getAllProjectsAsync();
            setProjects(projects);
            setState(getStateFromProjects(projects));
        };

        fetchProjects();
    }, []);

    return [projects, state];
}
