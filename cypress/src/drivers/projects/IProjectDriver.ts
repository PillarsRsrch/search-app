import { IFile } from '../file-picker/IFile';

export interface IProjectDriver {
    navigateToProjects(): Promise<void>;
    createProjectWithImportedData(file: IFile): Promise<void>;
    assertProjectCreated(): void;
}
