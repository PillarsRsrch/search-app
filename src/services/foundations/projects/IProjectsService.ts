import { IProject } from '../../../models/projects/IProject';

export interface IProjectsService {
    getAllServicesAsync(): Promise<IProject[]>;
}
