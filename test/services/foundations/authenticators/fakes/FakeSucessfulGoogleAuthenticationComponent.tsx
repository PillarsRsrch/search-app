import React from 'react';
import { AccessToken } from '../../../../../src/models/authenticator/AccessToken';
import { IGoogleAuthenticatorComponentProps } from '../../../../../src/views/components/authentication/authenticators/IGoogleAuthenticatorComponentProps';

export const FakeSuccessfulGoogleAuthenticationComponent = ({
    onSuccess,
}: IGoogleAuthenticatorComponentProps) => (
    <div onClick={() => onSuccess(new AccessToken('', 0))}>
        Login With Google
    </div>
);
