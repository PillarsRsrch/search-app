import React from 'react';
import { AccessToken } from '../../../../../src/models/authenticators/AccessToken';
import { IGoogleAuthenticatorComponentProps } from '../../../../../src/views/components/authentications/authenticators/IGoogleAuthenticatorComponentProps';

export const FakeSuccessfulGoogleAuthenticationComponent = ({
    onSuccess,
}: IGoogleAuthenticatorComponentProps) => (
    <div onClick={() => onSuccess(new AccessToken('', 0))}>
        Login With Google
    </div>
);
