import { ReactElement } from 'react';
import { AuthenticationCallback } from '../../../../../src/services/foundations/authenticators/AuthenticationCallback';
import { IAuthenticatorService } from '../../../../../src/services/foundations/authenticators/IAuthenticatorService';
import { IAuthenticatorComponentProps } from '../../../../../src/views/components/authentication/authenticators/IAuthenticatorComponentProps';

export abstract class FakeAuthenticatorService
    implements IAuthenticatorService
{
    createAuthenticator(
        onSuccess: AuthenticationCallback,
        onFailure: AuthenticationCallback
    ): ReactElement<IAuthenticatorComponentProps> {
        throw new Error('mocked implementation');
    }
}
