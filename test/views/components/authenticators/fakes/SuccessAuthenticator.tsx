import React from 'react';
import { IAuthenticatorComponentProps } from '../../../../../src/views/components/authentication/authenticators/IAuthenticatorComponentProps';

export const SuccessAuthenticator = ({
    onSuccess,
}: IAuthenticatorComponentProps) => {
    return <button onClick={() => onSuccess()}>Success</button>;
};
