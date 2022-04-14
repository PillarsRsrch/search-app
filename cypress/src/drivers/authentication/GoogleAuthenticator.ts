import { HTTPMethod } from '../web/HTTPMethod';
import { IWebDriver } from '../web/IWebDriver';
import { IAuthenticator } from './IAuthenticator';
import { IAuthenticatorCredentials } from './IAuthenticatorCredentials';
import { IGoogleAuthenticationResponseBody } from './IGoogleAuthenticationResponseBody';

export class GoogleAuthenticator implements IAuthenticator {
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
        cy.log(JSON.stringify(tokenResponse));
        cy.setCookie('access-token', tokenResponse.data.access_token);
    }
}
