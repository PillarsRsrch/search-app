import { IGoogleDrive } from '../../../models/google-drive/IGoogleDrive';

export interface IGoogleDriveService {
    getAllDrivesAsync(): Promise<IGoogleDrive[]>;
}
