import { IFile } from '../../drivers/file-picker/IFile';
import { IProjectDriver } from '../../drivers/projects/IProjectDriver';
import { IProjectDomainLanguage } from './IProjectDomainLanguage';

export class ProjectDomainLanguage implements IProjectDomainLanguage {
    constructor(private readonly driver: IProjectDriver) {}

    async navigateToProjects(): Promise<void> {
        await this.driver.navigateToProjects();
    }

    createProjectWithImportedData(file: IFile): void {
        this.driver.createProjectWithImportedData(file);
    }

    assertProjectCreated(): void {
        return this.driver.assertProjectCreated();
    }
}
