import { HTTPMethod } from '../web/HTTPMethod';
import { IWebDriver } from '../web/IWebDriver';
import { IAuthenticatorDriver } from './IAuthenticatorDriver';
import { IAuthenticatorCredentials } from './IAuthenticatorCredentials';
import { IGoogleAuthenticationResponseBody } from './IGoogleAuthenticationResponseBody';

export class GoogleAuthenticatorDriver implements IAuthenticatorDriver {
    constructor(
        private readonly driver: IWebDriver,
        private readonly credentials: IAuthenticatorCredentials
    ) {}

    async authenticate(): Promise<void> {
        const tokenResponse =
            await this.driver.makeRequest<IGoogleAuthenticationResponseBody>({
                method: HTTPMethod.POST,
                url: 'https://www.googleapis.com/oauth2/v4/token',
                body: this.credentials.body(),
            });
        cy.setCookie('access-token', tokenResponse.data.access_token);
    }
}
