import { IFile } from './IFile';

export interface IFilePickerDriver {
    selectFile(file: IFile);
}
