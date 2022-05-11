import { GoogleAuthenticatorDriver } from '../authenticator/GoogleAuthenticatorDriver';
import { IFile } from '../file-picker/IFile';
import { ClassSelector } from '../web/ClassSelector';
import { IWebDriver } from '../web/IWebDriver';
import { NameSelector } from '../web/NameSelector';
import { Path } from '../web/Path';
import { IProjectDriver } from './IProjectDriver';

export class GoogleDriveProjectDriver implements IProjectDriver {
    constructor(
        private readonly web: IWebDriver,
        private readonly authenticator: GoogleAuthenticatorDriver
    ) {}

    async navigateToProjects(): Promise<void> {
        this.web.navigateToPage(new Path('/projects'));
        await this.authenticator.authenticate();
    }

    async createProjectWithImportedData(): Promise<void> {
        this.web.click(new ClassSelector('button-component'));
        this.web.type(new NameSelector('projectName'), 'Project Name');
        this.web.click(new ClassSelector('button-component'));
    }

    assertProjectCreated(): void {
        this.web.findElement(new ClassSelector('card-component'));
    }
}
