import { IMapper } from '../../../mappers/IMapper';
import { IGoogleDrive } from '../../../models/google-drive/IGoogleDrive';
import { IGoogleDriveResource } from '../../../repositories/google-drive/resources/IGoogleDriveResource';
import { IAsyncRepository } from '../../../repositories/IAsyncRepository';
import { IGoogleDriveService } from './IGoogleDriveService';

export class GoogleDriveService implements IGoogleDriveService {
    constructor(
        private readonly repository: IAsyncRepository<IGoogleDriveResource>,
        private readonly mapper: IMapper<IGoogleDriveResource, IGoogleDrive>
    ) {}

    async getAllDrivesAsync(): Promise<IGoogleDrive[]> {
        const driveResources = await this.repository.getAll();
        return driveResources.map((resource) => this.mapper.map(resource));
    }
}
