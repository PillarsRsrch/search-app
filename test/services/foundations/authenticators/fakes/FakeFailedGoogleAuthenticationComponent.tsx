import React from 'react';
import { IGoogleAuthenticatorComponentProps } from '../../../../../src/views/components/authentication/authenticators/IGoogleAuthenticatorComponentProps';

export const FakeFailedGoogleAuthenticationComponent = ({
    onFailure,
}: IGoogleAuthenticatorComponentProps) => (
    <div onClick={() => onFailure(new Error())}>Login With Google</div>
);
