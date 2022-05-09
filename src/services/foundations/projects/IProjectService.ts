import { IProject } from '../../../models/projects/IProject';

export interface IProjectService {
    getAllProjectsAsync(): Promise<IProject[]>;
    createProjectAsync(project: IProject): Promise<IProject>;
}
