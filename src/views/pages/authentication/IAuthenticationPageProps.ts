import { IAuthenticatorService } from '../../../services/foundations/authenticators/IAuthenticatorService';
import { ICookieService } from '../../../services/foundations/cookies/ICookieService';
import { IIconService } from '../../../services/foundations/icons/IIconService';
import { IRouterService } from '../../../services/foundations/router/IRouterService';

export interface IAuthenticationPageProps {
    authenticatorService: IAuthenticatorService;
    iconService: IIconService;
    routerService: IRouterService;
    cookieService: ICookieService;
}
