import { IGoogleDrive } from '../../models/google-drive/IGoogleDrive';
import { IGoogleDriveResource } from '../../repositories/google-drive/resources/IGoogleDriveResource';
import { IMapper } from '../IMapper';

export class JSONGoogleDriveMapper
    implements IMapper<IGoogleDriveResource, IGoogleDrive>
{
    map(object: IGoogleDriveResource): IGoogleDrive {
        throw new Error('Method not implemented.');
    }

    inverseMap(project: IGoogleDrive): IGoogleDriveResource {
        throw new Error('Method not implemented.');
    }
}
