import { IProjectService } from '../../../../services/foundations/projects/IProjectService';

export interface IViewProjectPageProps {
    projectId: string;
    projectService: IProjectService;
}
