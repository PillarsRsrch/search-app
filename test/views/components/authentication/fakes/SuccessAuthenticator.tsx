import React from 'react';
import { AccessToken } from '../../../../../src/models/authenticators/AccessToken';
import { IAuthenticatorComponentProps } from '../../../../../src/views/components/authentication/authenticators/IAuthenticatorComponentProps';

export const SuccessAuthenticator = ({
    onSuccess,
}: IAuthenticatorComponentProps) => {
    return (
        <button onClick={() => onSuccess(new AccessToken('', 0))}>
            Success
        </button>
    );
};
