import { AuthenticationDomainLanguageFactory } from '../src/domain-languages/authentication/AuthenticationDomainFactory';
import { IAuthenticationDomainLanguage } from '../src/domain-languages/authentication/IAuthenticationDomainLanguage';
import { GoogleAuthenticatorCredentials } from '../src/drivers/authentication/GoogleAuthenticatorCredentials';

describe('Google Login Acceptance Test Suite', () => {
    const host = Cypress.env('HOST');
    const credentials = new GoogleAuthenticatorCredentials({
        grantType: 'refresh_token',
        clientId: Cypress.env('GOOGLE_CLIENT_ID'),
        clientSecret: Cypress.env('GOOGLE_CLIENT_SECRET'),
        refreshToken: Cypress.env('GOOGLE_REFRESH_TOKEN'),
    });
    const authenticationDomainLanguageFactory =
        new AuthenticationDomainLanguageFactory(host, credentials);
    const authentication: IAuthenticationDomainLanguage =
        authenticationDomainLanguageFactory.buildDomainLanguage();

    it('When user clicks login button it should get token, display success, and redirect', async () => {
        cy.log(JSON.stringify(credentials.body()));
        authentication.selectAuthenticationProcess();

        await authentication.authenticate();

        authentication.assertAuthenticationWasSuccessful();
    });
});
