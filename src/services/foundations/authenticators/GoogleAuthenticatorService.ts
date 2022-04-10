import { ReactElement } from 'react';
import { IAuthenticatorComponentProps } from '../../../views/components/authentication/authenticators/IAuthenticatorComponentProps';
import { AuthenticationCallback } from './AuthenticationCallback';
import { IAuthenticatorService } from './IAuthenticatorService';

export class GoogleAuthenticatorService implements IAuthenticatorService {
    createAuthenticator(
        handleSuccess: AuthenticationCallback,
        handleFailure: AuthenticationCallback
    ): ReactElement<IAuthenticatorComponentProps> {
        throw new Error('Method not implemented.');
    }

    handleSuccess(): void {
        throw new Error('Method not implemented.');
    }

    handleFailure(): void {
        throw new Error('Method not implemented.');
    }
}
