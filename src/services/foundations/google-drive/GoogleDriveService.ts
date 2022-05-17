import { IGoogleDrive } from '../../../models/google-drive/IGoogleDrive';
import { IGoogleDriveService } from './IGoogleDriveService';

export class GoogleDriveService implements IGoogleDriveService {
    async listDrivesAsync(): Promise<IGoogleDrive[]> {
        return [];
    }
}
