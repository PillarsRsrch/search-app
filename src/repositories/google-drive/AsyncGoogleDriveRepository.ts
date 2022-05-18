import { IAsyncRepository } from '../IAsyncRepository';
import { IGoogleDriveResource } from './resources/IGoogleDriveResource';

export class AsyncGoogleDriveRepository
    implements IAsyncRepository<IGoogleDriveResource>
{
    create(model: IGoogleDriveResource): Promise<IGoogleDriveResource> {
        throw new Error('Method not implemented.');
    }

    async getAll(): Promise<IGoogleDriveResource[]> {
        console.log(await gapi.client.drive.files.list());
        const response = await gapi.client.drive.drives.list();
        return response.result.drives ?? [];
    }

    getById(id: string): Promise<IGoogleDriveResource> {
        throw new Error('Method not implemented.');
    }
}
