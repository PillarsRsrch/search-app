import { IProjectMapper } from '../../../../mappers/project/IProjectMapper';
import { IForm } from '../../../../models/form/IForm';
import { IProjectService } from '../../../../services/foundations/projects/IProjectService';
import { IRouterService } from '../../../../services/foundations/router/IRouterService';

export interface ICreateProjectPageProps {
    projectMapper: IProjectMapper<IForm>;
    projectService: IProjectService;
    routerService: IRouterService;
}