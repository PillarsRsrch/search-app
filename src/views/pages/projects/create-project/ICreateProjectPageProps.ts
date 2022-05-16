import { IMapper } from '../../../../mappers/IMapper';
import { IForm } from '../../../../models/form/IForm';
import { IProject } from '../../../../models/projects/IProject';
import { IProjectService } from '../../../../services/foundations/projects/IProjectService';
import { IRouterService } from '../../../../services/foundations/router/IRouterService';

export interface ICreateProjectPageProps {
    projectMapper: IMapper<IForm, IProject>;
    projectService: IProjectService;
    routerService: IRouterService;
}
