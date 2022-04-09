import React from 'react';
import { IAuthenticatorComponentProps } from '../../../../../src/views/components/authentication/IAuthenticatorComponentProps';

export const SuccessAuthenticator = ({
    service,
}: IAuthenticatorComponentProps) => {
    return <button onClick={() => service.handleSuccess()}>Success</button>;
};
