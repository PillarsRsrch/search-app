import { IFile } from '../../drivers/file-picker/IFile';

export interface IProjectDomainLanguage {
    navigateToProjects(): Promise<void>;
    createProjectWithImportedData(file: IFile): Promise<void>;
    assertProjectCreated(): void;
}
