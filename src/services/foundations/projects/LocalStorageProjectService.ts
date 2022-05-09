import { IProject } from '../../../models/projects/IProject';
import { IProjectService } from './IProjectService';

export class LocalStorageProjectService implements IProjectService {
    getAllProjectsAsync(): Promise<IProject[]> {
        throw new Error('Method not implemented.');
    }
    createProjectAsync(project: IProject): Promise<IProject> {
        throw new Error('Method not implemented.');
    }
}
