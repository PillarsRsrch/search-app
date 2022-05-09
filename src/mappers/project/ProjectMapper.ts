import { IForm } from '../../models/form/IForm';
import { IProject } from '../../models/projects/IProject';
import { IProjectMapper } from './IProjectMapper';

export class ProjectMapper implements IProjectMapper {
    fromForm(form: IForm): IProject {
        throw new Error('Method not implemented.');
    }
}
