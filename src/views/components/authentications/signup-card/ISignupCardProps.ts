import { AccessToken } from '../../../../models/authenticators/AccessToken';
import { IAuthenticatorService } from '../../../../services/foundations/authenticators/IAuthenticatorService';
import { ICookieService } from '../../../../services/foundations/cookies/ICookieService';
import { IIconService } from '../../../../services/foundations/icons/IIconService';

export interface ISignupCardProps {
    iconService: IIconService;
    authenticatorService: IAuthenticatorService;
    cookieService: ICookieService;
    onSignup: (accessToken: AccessToken) => void;
}
