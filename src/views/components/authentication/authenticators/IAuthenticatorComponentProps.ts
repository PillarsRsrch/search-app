import { AccessToken } from '../../../../models/authenticators/AccessToken';

export interface IAuthenticatorComponentProps {
    onSuccess: (token: AccessToken) => void;
    onFailure: (error: Error) => void;
}
