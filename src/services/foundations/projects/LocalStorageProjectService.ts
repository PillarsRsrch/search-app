import { IProjectMapper } from '../../../mappers/project/IProjectMapper';
import { IProject } from '../../../models/projects/IProject';
import { IRepository } from '../../../repositories/IRepository';
import { LocalStorageRecord } from '../../../repositories/local-storage/LocalStorageRecord';
import { IProjectService } from './IProjectService';

export class LocalStorageProjectService implements IProjectService {
    constructor(
        private readonly repository: IRepository<LocalStorageRecord>,
        private readonly mapper: IProjectMapper<LocalStorageRecord>
    ) {}

    async createProjectAsync(project: IProject): Promise<IProject> {
        const record = this.mapper.unmap(project);
        this.repository.create(record);
        return this.mapper.map(record);
    }

    async getAllProjectsAsync(): Promise<IProject[]> {
        const projects = await this.repository.getAll();
        return projects.map((project) => this.mapper.map(project));
    }

    async getProjectByIdAsync(projectId: string): Promise<IProject> {
        throw new Error();
    }
}
