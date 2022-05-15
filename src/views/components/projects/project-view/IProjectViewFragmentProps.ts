import { IProject } from '../../../../models/projects/IProject';

export interface IProjectViewFragmentProps {
    project: IProject | null;
    onViewData: (project: IProject) => void;
}
