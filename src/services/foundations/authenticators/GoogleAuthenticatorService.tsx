import React, { ReactElement } from 'react';
import { GoogleAuthenticationComponent } from '../../../views/components/authentication/authenticators/GoogleAuthenticatorComponent';
import { IAuthenticatorComponentProps } from '../../../views/components/authentication/authenticators/IAuthenticatorComponentProps';
import { AuthenticationCallback } from './AuthenticationCallback';
import { IAuthenticatorService } from './IAuthenticatorService';

export class GoogleAuthenticatorService implements IAuthenticatorService {
    constructor(
        private readonly clientId: string,
        private readonly cookiePolicy: string,
        private readonly Authenticator: typeof GoogleAuthenticationComponent
    ) {}

    createAuthenticator(
        handleSuccess: AuthenticationCallback,
        handleFailure: AuthenticationCallback
    ): ReactElement<IAuthenticatorComponentProps> {
        const Authenticator = this.Authenticator;
        return (
            <Authenticator
                clientId={this.clientId}
                cookiePolicy={this.cookiePolicy}
                onFailure={() => handleFailure()}
                onSuccess={() => handleSuccess()}
            >
                Login With Google
            </Authenticator>
        );
    }
}
