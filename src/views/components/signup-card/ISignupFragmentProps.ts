import { AccessToken } from '../../../models/authenticator/AccessToken';
import { IAuthenticatorService } from '../../../services/foundations/authenticators/IAuthenticatorService';

export interface ISignupFragmentProps {
    authenticatorService: IAuthenticatorService;
    onSuccess: (accessToken: AccessToken) => void;
    onFailure: (error: Error) => void;
}
