import { IAuthenticationDomainLanguage } from './IAuthenticationDomainLanguage';

export interface IAuthenticationDomainLanguageFactory {
    buildDomainLanguage(): IAuthenticationDomainLanguage;
}
