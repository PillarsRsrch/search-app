import { IProjectDriver } from '../../drivers/projects/IProjectDriver';
import { IProjectDomainLanguage } from './IProjectDomainLanguage';

export class ProjectDomainLanguage implements IProjectDomainLanguage {
    constructor(private readonly driver: IProjectDriver) {}

    async navigateToProjects(): Promise<void> {
        await this.driver.navigateToProjects();
    }

    async createProjectWithImportedData(): Promise<void> {
        await this.driver.createProjectWithImportedData();
    }

    assertProjectCreated(): void {
        return this.driver.assertProjectCreated();
    }
}
