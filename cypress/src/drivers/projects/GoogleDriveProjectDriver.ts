import { GoogleAuthenticatorDriver } from '../authenticator/GoogleAuthenticatorDriver';
import { GoogleDriveFilePickerDriver } from '../file-picker/GoogleDriveFilePickerDriver';
import { IFile } from '../file-picker/IFile';
import { ClassSelector } from '../web/ClassSelector';
import { IdSelector } from '../web/IdSelector';
import { IWebDriver } from '../web/IWebDriver';
import { Path } from '../web/Path';
import { IProjectDriver } from './IProjectDriver';

export class GoogleDriveProjectDriver implements IProjectDriver {
    constructor(
        private readonly web: IWebDriver,
        private readonly authenticator: GoogleAuthenticatorDriver,
        private readonly filePicker: GoogleDriveFilePickerDriver
    ) {}

    async navigateToProjects(): Promise<void> {
        await this.authenticator.authenticate();
        this.web.navigateToPage(new Path('/projects'));
    }

    async createProjectWithImportedData(file: IFile): Promise<void> {
        this.web.click(new IdSelector('create-project'));
        await this.web.expectPageChangeTo(new Path('/projects/new'));
        this.web.click(new IdSelector('google-import-project-data'));
        this.filePicker.selectFile(file);
    }

    assertProjectCreated(): void {
        this.web.findElement(new ClassSelector('project-component'));
    }
}
