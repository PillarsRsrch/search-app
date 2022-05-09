import { IForm } from '../../models/form/IForm';
import { IProject } from '../../models/projects/IProject';

export interface IProjectMapper {
    fromForm(form: IForm): IProject;
}
