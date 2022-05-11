import { IProject } from '../../../../models/projects/IProject';

export interface IProjectListElementProps {
    project: IProject;
    viewProject: (project: IProject) => void;
}
