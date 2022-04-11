import { IAuthenticatorService } from '../../../services/foundations/authenticators/IAuthenticatorService';

export interface ISignupFragmentProps {
    authenticatorService: IAuthenticatorService;
    onSuccess: () => void;
    onFailure: () => void;
}
