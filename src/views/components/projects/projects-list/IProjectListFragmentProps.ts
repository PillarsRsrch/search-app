import { IProject } from '../../../../models/projects/IProject';

export interface IProjectListFragmentProps {
    projects: IProject[];
    createProject: () => void;
}
