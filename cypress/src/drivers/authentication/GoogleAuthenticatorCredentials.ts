import { IAuthenticatorCredentials } from './IAuthenticatorCredentials';
import { IGoogleAuthenticatorCredentialsDTO } from './IGoogleAuthenticatorCredentialsDTO';

export class GoogleAuthenticatorCredentials
    implements IAuthenticatorCredentials
{
    constructor(
        private readonly credentialsDTO: IGoogleAuthenticatorCredentialsDTO
    ) {}

    body(): Record<string, unknown> {
        return {
            grant_type: this.credentialsDTO.grantType,
            refresh_token: this.credentialsDTO.refreshToken,
            client_id: this.credentialsDTO.clientId,
            client_secret: this.credentialsDTO.clientSecret,
        };
    }
}
