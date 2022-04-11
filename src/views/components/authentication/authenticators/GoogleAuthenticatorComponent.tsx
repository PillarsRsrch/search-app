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
        scope="https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.readonly"
        onSuccess={(x) => {
            console.log(x);
            onSuccess();
        }}
        onFailure={onFailure}
    />
);
