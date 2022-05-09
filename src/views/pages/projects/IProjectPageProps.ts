import { IProjectService } from '../../../services/foundations/projects/IProjectService';
import { IRouterService } from '../../../services/foundations/router/IRouterService';

export interface IProjectPageProps {
    projectService: IProjectService;
    routerService: IRouterService;
}
