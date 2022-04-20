import { IProjectsService } from '../../../services/foundations/projects/IProjectsService';
import { IRouterService } from '../../../services/foundations/router/IRouterService';

export interface IProjectPageProps {
    projectService: IProjectsService;
    routerService: IRouterService;
}
