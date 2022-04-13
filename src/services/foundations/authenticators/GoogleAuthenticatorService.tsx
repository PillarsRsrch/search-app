import React, { ReactElement } from 'react';
import { AccessToken } from '../../../models/authenticators/AccessToken';
import { GoogleAuthenticationComponent } from '../../../views/components/authentication/authenticators/GoogleAuthenticatorComponent';
import { IAuthenticatorComponentProps } from '../../../views/components/authentication/authenticators/IAuthenticatorComponentProps';
import { IAuthenticatorService } from './IAuthenticatorService';

export class GoogleAuthenticatorService implements IAuthenticatorService {
    constructor(
        private readonly clientId: string,
        private readonly cookiePolicy: string,
        private readonly scope: string,
        private readonly Authenticator: typeof GoogleAuthenticationComponent
    ) {}

    createAuthenticator(
        handleSuccess: (token: AccessToken) => void,
        handleFailure: (error: Error) => void
    ): ReactElement<IAuthenticatorComponentProps> {
        const Authenticator = this.Authenticator;
        return (
            <Authenticator
                scope={this.scope}
                clientId={this.clientId}
                cookiePolicy={this.cookiePolicy}
                onFailure={(error) => handleFailure(error)}
                onSuccess={(token) => handleSuccess(token)}
            >
                Login With Google
            </Authenticator>
        );
    }
}
