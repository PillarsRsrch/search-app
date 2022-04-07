import { GoogleAuthenticator } from '../../drivers/authentication/GoogleAuthenticator';
import { GoogleAuthenticatorCredentials } from '../../drivers/authentication/GoogleAuthenticatorCredentials';
import { GoogleSocialLoginAuthenticationDriver } from '../../drivers/authentication/GoogleSocialLoginAuthenticationDriver';
import { IAuthenticatorCredentials } from '../../drivers/authentication/IAuthenticatorCredentials';
import { WebDriver } from '../../drivers/web/WebDriver';
import { AuthenticationDomainLanguage } from './AuthenticationDomainLanguage';
import { IAuthenticationDomainLanguage } from './IAuthenticationDomainLanguage';
import { IAuthenticationDomainLanguageFactory } from './IAuthenticationDomainLanguageFactory';

export class AuthenticationDomainLanguageFactory
    implements IAuthenticationDomainLanguageFactory
{
    constructor(
        private readonly host: string,
        private readonly credentials: IAuthenticatorCredentials
    ) {}

    buildDomainLanguage(): IAuthenticationDomainLanguage {
        const webDriver = new WebDriver(this.host);
        const googleAuthenticator = new GoogleAuthenticator(
            webDriver,
            this.credentials
        );
        const authenticationDriver = new GoogleSocialLoginAuthenticationDriver(
            webDriver,
            googleAuthenticator
        );
        return new AuthenticationDomainLanguage(authenticationDriver);
    }
}
