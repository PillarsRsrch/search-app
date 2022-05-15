import { IProject } from '../../../../models/projects/IProject';
import { IProjectService } from '../../../../services/foundations/projects/IProjectService';

export interface IProjectViewProps {
    projectId: string;
    projectService: IProjectService;
    onViewData: (project: IProject) => void;
}
