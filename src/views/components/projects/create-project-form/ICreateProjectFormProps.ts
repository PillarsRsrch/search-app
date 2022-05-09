import { IProject } from '../../../../models/projects/IProject';

export interface ICreateProjectFormProps {
    onSubmit: (project: IProject) => void;
}
