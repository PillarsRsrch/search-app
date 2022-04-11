import { IAuthenticatorService } from '../../../services/foundations/authenticators/IAuthenticatorService';
import { IIconService } from '../../../services/foundations/icons/IIconService';

export interface ISignupCardProps {
    iconService: IIconService;
    authenticatorService: IAuthenticatorService;
    onSignup: () => void;
}
