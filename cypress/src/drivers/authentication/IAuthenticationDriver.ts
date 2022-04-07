export interface IAuthenticationDriver {
    selectAuthenticationProcess(): void;
    authenticate(): Promise<void>;
    assertAuthenticationWasSuccessful(): Promise<void>;
}
