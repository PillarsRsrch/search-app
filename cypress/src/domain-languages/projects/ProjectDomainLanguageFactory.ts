import { GoogleAuthenticatorDriver } from '../../drivers/authenticator/GoogleAuthenticatorDriver';
import { IAuthenticatorCredentials } from '../../drivers/authenticator/IAuthenticatorCredentials';
import { GoogleDriveFilePickerDriver } from '../../drivers/file-picker/GoogleDriveFilePickerDriver';
import { GoogleDriveProjectDriver } from '../../drivers/projects/GoogleDriveProjectDriver';
import { WebDriver } from '../../drivers/web/WebDriver';
import { IDomainLanguageFactory } from '../IDomainLanguageFactory';
import { IProjectDomainLanguage } from './IProjectDomainLanguage';
import { ProjectDomainLanguage } from './ProjectDomainLanguage';

export class ProjectDomainLanguageFactory
    implements IDomainLanguageFactory<IProjectDomainLanguage>
{
    constructor(
        private readonly host: string,
        private readonly credentials: IAuthenticatorCredentials
    ) {}

    buildDomainLanguage(): IProjectDomainLanguage {
        const webDriver = new WebDriver(this.host);
        const googleAuthenticatorDriver = new GoogleAuthenticatorDriver(
            webDriver,
            this.credentials
        );
        const projectDriver = new GoogleDriveProjectDriver(
            webDriver,
            googleAuthenticatorDriver
        );
        return new ProjectDomainLanguage(projectDriver);
    }
}
