import { IProjectService } from '../../../../services/foundations/projects/IProjectService';

export interface IProjectNameProps {
    projectService: IProjectService;
    projectId: string;
}
