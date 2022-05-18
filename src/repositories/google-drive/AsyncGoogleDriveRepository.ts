import { IAsyncRepository } from '../IAsyncRepository';
import { IGoogleDriveResource } from './resources/IGoogleDriveResource';

export class AsyncGoogleDriveRepository
    implements IAsyncRepository<IGoogleDriveResource>
{
    create(model: IGoogleDriveResource): Promise<IGoogleDriveResource> {
        throw new Error('Method not implemented.');
    }

    getAll(): Promise<IGoogleDriveResource[]> {
        throw new Error('Method not implemented.');
    }

    getById(id: string): Promise<IGoogleDriveResource> {
        throw new Error('Method not implemented.');
    }
}
