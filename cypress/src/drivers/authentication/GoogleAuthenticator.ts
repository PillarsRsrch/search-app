import { IWebDriver } from '../web/IWebDriver';
import { IAuthenticator } from './IAuthenticator';

export class GoogleAuthenticator implements IAuthenticator {
    constructor(private readonly driver: IWebDriver) {}

    authenticate(): Promise<void> {
        throw new Error();
    }
}
