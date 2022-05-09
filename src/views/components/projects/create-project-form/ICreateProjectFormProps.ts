import { IProjectMapper } from '../../../../mappers/project/IProjectMapper';
import { IProject } from '../../../../models/projects/IProject';

export interface ICreateProjectFormProps {
    projectMapper: IProjectMapper;
    onSubmit: (project: IProject) => void;
}
