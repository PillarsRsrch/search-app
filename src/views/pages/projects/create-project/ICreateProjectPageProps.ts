import { IProjectMapper } from '../../../../mappers/project/IProjectMapper';
import { IProjectService } from '../../../../services/foundations/projects/IProjectService';

export interface ICreateProjectPageProps {
    projectMapper: IProjectMapper;
    projectService: IProjectService;
}
