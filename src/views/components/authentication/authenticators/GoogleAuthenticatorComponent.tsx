import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { IGoogleAuthenticatorComponentProps } from './IGoogleAuthenticatorComponentProps';

export const GoogleAuthenticationComponent = ({
    service,
    clientId,
    cookiePolicy,
    children,
}: IGoogleAuthenticatorComponentProps) => (
    <GoogleLogin
        cookiePolicy={cookiePolicy}
        clientId={clientId}
        buttonText={children}
        onSuccess={service.handleSuccess}
        onFailure={service.handleFailure}
    />
);
