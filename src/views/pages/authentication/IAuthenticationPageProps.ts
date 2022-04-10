import { IAuthenticatorService } from '../../../services/foundations/authenticators/IAuthenticatorService';
import { IIconService } from '../../../services/foundations/icons/IIconService';

export interface IAuthenticationPageProps {
    authenticatorService: IAuthenticatorService;
    iconService: IIconService;
}
