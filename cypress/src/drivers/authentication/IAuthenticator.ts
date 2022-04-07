export interface IAuthenticator {
    authenticate(): Promise<void>;
}
