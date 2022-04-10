import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { IGoogleAuthenticatorComponentProps } from './IGoogleAuthenticatorComponentProps';

export const GoogleAuthenticationComponent = ({
    clientId,
    cookiePolicy,
    children,
    onSuccess,
    onFailure,
}: IGoogleAuthenticatorComponentProps) => (
    <GoogleLogin
        cookiePolicy={cookiePolicy}
        clientId={clientId}
        buttonText={children}
        onSuccess={onSuccess}
        onFailure={onFailure}
    />
);
