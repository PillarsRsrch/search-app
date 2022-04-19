import { IFile } from './IFile';
import { IFilePickerDriver } from './IFilePickerDriver';

export class GoogleDriveFilePickerDriver implements IFilePickerDriver {
    selectFile(file: IFile) {
        throw new Error('Method not implemented.');
    }
}
