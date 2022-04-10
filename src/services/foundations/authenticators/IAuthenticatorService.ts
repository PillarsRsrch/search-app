import { ReactElement } from 'react';
import { IAuthenticatorComponentProps } from '../../../views/components/authentication/authenticators/IAuthenticatorComponentProps';
import { AuthenticationCallback } from './AuthenticationCallback';

export interface IAuthenticatorService {
    createAuthenticator(
        handleSuccess: AuthenticationCallback,
        handleFailure: AuthenticationCallback
    ): ReactElement<IAuthenticatorComponentProps>;
}
