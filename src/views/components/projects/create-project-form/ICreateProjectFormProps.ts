import { IProjectMapper } from '../../../../mappers/project/IProjectMapper';
import { IForm } from '../../../../models/form/IForm';
import { IProject } from '../../../../models/projects/IProject';

export interface ICreateProjectFormProps {
    projectMapper: IProjectMapper<IForm>;
    onSubmit: (project: IProject) => void;
}
