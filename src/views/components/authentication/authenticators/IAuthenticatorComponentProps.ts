import { AccessToken } from '../../../../models/authenticator/AccessToken';

export interface IAuthenticatorComponentProps {
    onSuccess: (token: AccessToken) => void;
    onFailure: (error: Error) => void;
}
