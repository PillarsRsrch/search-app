import { IProject } from '../../../../models/projects/IProject';

export interface IProjectDisplayAllProjectsFragment {
    projects: IProject[];
    createProject: () => void;
}
