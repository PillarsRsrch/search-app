import { IAuthenticationDriver } from '../../drivers/authentication/IAuthenticationDriver';
import { IAuthenticationDomainLanguage } from './IAuthenticationDomainLanguage';

export class AuthenticationDomainLanguage
    implements IAuthenticationDomainLanguage
{
    constructor(private readonly driver: IAuthenticationDriver) {}

    selectAuthenticationProcess(): void {
        this.driver.selectAuthenticationProcess();
    }

    authenticate(): Promise<void> {
        return this.driver.authenticate();
    }

    assertAuthenticationWasSuccessful(): void {
        this.driver.assertAuthenticationWasSuccessful();
    }
}
