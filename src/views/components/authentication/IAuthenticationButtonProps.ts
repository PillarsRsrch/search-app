import { MouseEvent } from 'react';
import { AuthenticationCallback } from '../../../services/foundations/authenticators/AuthenticationCallback';
import { IAuthenticatorService } from '../../../services/foundations/authenticators/IAuthenticatorService';

export interface IAuthenticationButtonProps {
    service: IAuthenticatorService;
    onClick: (e: MouseEvent) => void;
    onSuccess: AuthenticationCallback;
    onFailure: AuthenticationCallback;
}
