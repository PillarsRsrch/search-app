import { useEffect, useState } from 'react';
import { IProject } from '../../models/projects/IProject';
import { IProjectService } from '../../services/foundations/projects/IProjectService';
import { ProjectState } from './ProjectState';

export function useProject(
    projectService: IProjectService,
    projectId: string
): [IProject | null, ProjectState] {
    const [state, setState] = useState(ProjectState.Loading);
    const [project, setProject] = useState<IProject | null>(null);

    function getStateFromProject(project: IProject | null) {
        return project
            ? ProjectState.LoadedProject
            : ProjectState.ProjectNotFound;
    }

    useEffect(() => {
        async function getProject() {
            const project = await projectService.getProjectByIdAsync(projectId);
            setProject(project);
            setState(getStateFromProject(project));
        }

        if (projectId) {
            getProject();
        }
    }, [projectId]);

    return [project, state];
}
