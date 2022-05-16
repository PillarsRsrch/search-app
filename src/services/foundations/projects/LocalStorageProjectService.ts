import { IMapper } from '../../../mappers/IMapper';
import { IProject } from '../../../models/projects/IProject';
import { IRepository } from '../../../repositories/IRepository';
import { LocalStorageRecord } from '../../../repositories/local-storage/LocalStorageRecord';
import { IProjectService } from './IProjectService';

export class LocalStorageProjectService implements IProjectService {
    constructor(
        private readonly repository: IRepository<LocalStorageRecord>,
        private readonly mapper: IMapper<LocalStorageRecord, IProject>
    ) {}

    async createProjectAsync(project: IProject): Promise<IProject> {
        const projectRecord = this.mapper.inverseMap(project);
        this.repository.create(projectRecord);
        return this.mapper.map(projectRecord);
    }

    async getAllProjectsAsync(): Promise<IProject[]> {
        const projectRecords = this.repository.getAll();
        return projectRecords.map((projectRecord) =>
            this.mapper.map(projectRecord)
        );
    }

    async getProjectByIdAsync(projectId: string): Promise<IProject> {
        const projectRecord = this.repository.getById(projectId);
        return this.mapper.map(projectRecord);
    }
}
