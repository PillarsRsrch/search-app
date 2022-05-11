import { IProjectMapper } from '../../../../mappers/project/IProjectMapper';
import { IForm } from '../../../../models/form/IForm';
import { IProjectService } from '../../../../services/foundations/projects/IProjectService';

export interface ICreateProjectPageProps {
    projectMapper: IProjectMapper<IForm>;
    projectService: IProjectService;
}
