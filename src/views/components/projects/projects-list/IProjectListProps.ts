import { IProject } from '../../../../models/projects/IProject';
import { IProjectService } from '../../../../services/foundations/projects/IProjectService';

export interface IProjectListProps {
    projectsService: IProjectService;
    onCreateProject: () => void;
    onViewProject: (project: IProject) => void;
}
