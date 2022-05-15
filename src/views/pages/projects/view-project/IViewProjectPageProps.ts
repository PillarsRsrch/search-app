import { IProjectService } from '../../../../services/foundations/projects/IProjectService';
import { IRouterService } from '../../../../services/foundations/router/IRouterService';

export interface IViewProjectPageProps {
    projectId: string;
    projectService: IProjectService;
    routerService: IRouterService;
}
