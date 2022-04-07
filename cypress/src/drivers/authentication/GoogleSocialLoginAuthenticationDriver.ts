import { Cookie } from '../web/Cookie';
import { IdSelector } from '../web/IdSelector';
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

    assertAuthenticationWasSuccessful(): void {
        this.webDriver.findElement(new IdSelector('check_mark_icon'));
        this.webDriver.findCookie(new Cookie('google_token'));
    }

    authenticate(): Promise<void> {
        return this.authenticator.authenticate();
    }

    selectAuthenticationProcess(): void {
        this.webDriver.navigateToPage(new Path('/'));
    }
}
