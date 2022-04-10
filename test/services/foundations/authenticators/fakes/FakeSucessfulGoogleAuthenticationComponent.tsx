import React from 'react';
import { IGoogleAuthenticatorComponentProps } from '../../../../../src/views/components/authentication/authenticators/IGoogleAuthenticatorComponentProps';

export const FakeSuccessfulGoogleAuthenticationComponent = ({
    onSuccess,
}: IGoogleAuthenticatorComponentProps) => (
    <div onClick={() => onSuccess()}>Login With Google</div>
);
