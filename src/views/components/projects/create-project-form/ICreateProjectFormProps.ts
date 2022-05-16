import { IMapper } from '../../../../mappers/IMapper';
import { IForm } from '../../../../models/form/IForm';
import { IProject } from '../../../../models/projects/IProject';

export interface ICreateProjectFormProps {
    projectMapper: IMapper<IForm, IProject>;
    onSubmit: (project: IProject) => void;
}
