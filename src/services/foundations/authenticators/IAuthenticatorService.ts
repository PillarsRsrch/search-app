import { ReactElement } from 'react';
import { AccessToken } from '../../../models/authenticators/AccessToken';
import { IAuthenticatorComponentProps } from '../../../views/components/authentications/authenticators/IAuthenticatorComponentProps';

export interface IAuthenticatorService {
    createAuthenticator(
        handleSuccess: (accessToken: AccessToken) => void,
        handleFailure: (error: Error) => void
    ): ReactElement<IAuthenticatorComponentProps>;
}
