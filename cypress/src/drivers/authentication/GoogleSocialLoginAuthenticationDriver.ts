import { Cookie } from '../web/Cookie';
import { ClassSelector } from '../web/ClassSelector';
import { IWebDriver } from '../web/IWebDriver';
import { Path } from '../web/Path';
import { IAuthenticationDriver } from './IAuthenticationDriver';
import { IAuthenticator } from './IAuthenticator';

export class GoogleSocialLoginAuthenticationDriver
    implements IAuthenticationDriver
{
    constructor(
        private readonly webDriver: IWebDriver,
        private readonly authenticator: IAuthenticator
    ) {}

    async assertAuthenticationWasSuccessful(): Promise<void> {
        this.webDriver.findElement(new ClassSelector('icon'));
        this.webDriver.findCookie(new Cookie('access-token'));
        await this.webDriver.expectPageChangeTo(new Path('/projects'));
    }

    async authenticate(): Promise<void> {
        const buttonSelector = new ClassSelector('authentication-button');
        await this.authenticator.authenticate();
        this.webDriver.click(buttonSelector);
    }

    selectAuthenticationProcess(): void {
        const buttonSelector = new ClassSelector('authentication-button');
        this.webDriver.navigateToPage(new Path('/'));
        this.webDriver.findElement(buttonSelector);
    }
}
