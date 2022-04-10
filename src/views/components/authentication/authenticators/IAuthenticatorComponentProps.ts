import { AuthenticationCallback } from '../../../../services/foundations/authenticators/AuthenticationCallback';

export interface IAuthenticatorComponentProps {
    onSuccess: AuthenticationCallback;
    onFailure: AuthenticationCallback;
}
