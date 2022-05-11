import { IProjectMapper } from '../../../mappers/project/IProjectMapper';
import { IProject } from '../../../models/projects/IProject';
import { ILocalStorageRepository } from '../../../repositories/local-storage/ILocalStorageRepository';
import { LocalStorageRecord } from '../../../repositories/local-storage/LocalStorageRecord';
import { IProjectService } from './IProjectService';

export class LocalStorageProjectService implements IProjectService {
    constructor(
        private readonly repository: ILocalStorageRepository,
        private readonly mapper: IProjectMapper<LocalStorageRecord>
    ) {}

    async getAllProjectsAsync(): Promise<IProject[]> {
        const projects = await this.repository.getAll();
        return projects.map((project) => this.mapper.map(project));
    }

    async createProjectAsync(project: IProject): Promise<IProject> {
        const record = this.mapper.unmap(project);
        this.repository.save(record);
        return this.mapper.map(record);
    }
}
