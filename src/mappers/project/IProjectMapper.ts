import { IProject } from '../../models/projects/IProject';

export interface IProjectMapper<T> {
    map(object: T): IProject;
    unmap(project: IProject): T;
}
