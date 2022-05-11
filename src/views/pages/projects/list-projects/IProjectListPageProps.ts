import { IProjectService } from '../../../../services/foundations/projects/IProjectService';
import { IRouterService } from '../../../../services/foundations/router/IRouterService';

export interface IProjectListPageProps {
    projectService: IProjectService;
    routerService: IRouterService;
}
