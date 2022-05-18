import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';
import { AccessToken } from '../../../../models/authenticators/AccessToken';
import { IGoogleAuthenticatorComponentProps } from './IGoogleAuthenticatorComponentProps';

export const GoogleAuthenticationComponent = ({
    clientId,
    cookiePolicy,
    scope,
    children,
    onSuccess,
    onFailure,
}: IGoogleAuthenticatorComponentProps) => {
    useEffect(() => {
        document
            .getElementById('googleApi')
            ?.addEventListener('load', () => {});
    });

    return (
        <GoogleLogin
            cookiePolicy={cookiePolicy}
            clientId={clientId}
            buttonText={children}
            scope={scope}
            onSuccess={(googleLoginResponse) => {
                const response = googleLoginResponse as GoogleLoginResponse;
                const token = new AccessToken(
                    response.accessToken,
                    response.tokenObj.expires_at
                );
                onSuccess(token);
            }}
            onFailure={onFailure}
        />
    );
};
