import { GoogleAuthenticatorDriver } from '../../drivers/authenticator/GoogleAuthenticatorDriver';
import { GoogleSocialLoginAuthenticationDriver } from '../../drivers/authentication/GoogleSocialLoginAuthenticationDriver';
import { IAuthenticatorCredentials } from '../../drivers/authenticator/IAuthenticatorCredentials';
import { WebDriver } from '../../drivers/web/WebDriver';
import { IDomainLanguageFactory } from '../IDomainLanguageFactory';
import { AuthenticationDomainLanguage } from './AuthenticationDomainLanguage';
import { IAuthenticationDomainLanguage } from './IAuthenticationDomainLanguage';

export class AuthenticationDomainLanguageFactory
    implements IDomainLanguageFactory<IAuthenticationDomainLanguage>
{
    constructor(
        private readonly host: string,
        private readonly credentials: IAuthenticatorCredentials
    ) {}

    buildDomainLanguage(): IAuthenticationDomainLanguage {
        const webDriver = new WebDriver(this.host);
        const googleAuthenticator = new GoogleAuthenticatorDriver(
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
