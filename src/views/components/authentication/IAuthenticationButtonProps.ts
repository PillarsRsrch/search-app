import { MouseEvent } from 'react';
import { AccessToken } from '../../../models/authenticators/AccessToken';
import { IAuthenticatorService } from '../../../services/foundations/authenticators/IAuthenticatorService';

export interface IAuthenticationButtonProps {
    service: IAuthenticatorService;
    onClick: (e: MouseEvent) => void;
    onSuccess: (accessToken: AccessToken) => void;
    onFailure: (error: Error) => void;
}
