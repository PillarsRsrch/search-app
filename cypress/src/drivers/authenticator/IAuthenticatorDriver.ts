export interface IAuthenticatorDriver {
    authenticate(): Promise<void>;
}
