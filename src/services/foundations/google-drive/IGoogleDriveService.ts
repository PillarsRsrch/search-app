import { IGoogleDrive } from '../../../models/google-drive/IGoogleDrive';

export interface IGoogleDriveService {
    listDrivesAsync(): Promise<IGoogleDrive[]>;
}
