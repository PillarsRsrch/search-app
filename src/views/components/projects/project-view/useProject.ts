import { useEffect, useState } from 'react';
import { IProject } from '../../../../models/projects/IProject';
import { IProjectService } from '../../../../services/foundations/projects/IProjectService';
import { ProjectViewState } from './ProjectViewState';

export function useProject(
    projectService: IProjectService,
    projectId: string
): [IProject | null, ProjectViewState] {
    const [state, setState] = useState(ProjectViewState.Loading);
    const [project, setProject] = useState<IProject | null>(null);

    useEffect(() => {
        async function getProject() {
            const project = await projectService.getProjectByIdAsync(projectId);
            setProject(project);
            setState(ProjectViewState.LoadedProject);
        }

        if (projectId) {
            getProject();
        }
    }, [projectId]);

    return [project, state];
}
