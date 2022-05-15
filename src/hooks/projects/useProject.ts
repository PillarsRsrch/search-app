import { useEffect, useState } from 'react';
import { IProject } from '../../models/projects/IProject';
import { IProjectService } from '../../services/foundations/projects/IProjectService';
import { ProjectHookState } from './ProjectHookState';

export function useProject(
    projectService: IProjectService,
    projectId: string
): [IProject | null, ProjectHookState] {
    const [state, setState] = useState(ProjectHookState.Loading);
    const [project, setProject] = useState<IProject | null>(null);

    useEffect(() => {
        async function getProject() {
            const project = await projectService.getProjectByIdAsync(projectId);
            setProject(project);
            setState(ProjectHookState.LoadedProject);
        }

        if (projectId) {
            getProject();
        }
    }, [projectId]);

    return [project, state];
}
