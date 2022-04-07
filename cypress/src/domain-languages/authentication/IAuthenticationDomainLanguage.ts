export interface IAuthenticationDomainLanguage {
    selectAuthenticationProcess(): void;
    authenticate(): Promise<void>;
    assertAuthenticationWasSuccessful(): void;
}
