import { IProject } from '../../../../models/projects/IProject';

export interface IProjectViewFragmentProps {
    project: IProject;
    onViewData: (project: IProject) => void;
}
