import { ReactElement } from 'react';
import { AccessToken } from '../../../../../src/models/authenticators/AccessToken';
import { IAuthenticatorService } from '../../../../../src/services/foundations/authenticators/IAuthenticatorService';
import { IAuthenticatorComponentProps } from '../../../../../src/views/components/authentication/authenticators/IAuthenticatorComponentProps';

export abstract class FakeAuthenticatorService
    implements IAuthenticatorService
{
    createAuthenticator(
        onSuccess: (accessToken: AccessToken) => void,
        onFailure: (error: Error) => void
    ): ReactElement<IAuthenticatorComponentProps> {
        throw new Error('mocked implementation');
    }
}
