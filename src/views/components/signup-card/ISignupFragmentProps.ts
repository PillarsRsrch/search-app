import { AccessToken } from '../../../models/authenticators/AccessToken';
import { IAuthenticatorService } from '../../../services/foundations/authenticators/IAuthenticatorService';

export interface ISignupFragmentProps {
    authenticatorService: IAuthenticatorService;
    onSuccess: (accessToken: AccessToken) => void;
    onFailure: (error: Error) => void;
}
