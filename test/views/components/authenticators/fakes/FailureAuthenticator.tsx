import React from 'react';
import { IAuthenticatorComponentProps } from '../../../../../src/views/components/authentication/authenticators/IAuthenticatorComponentProps';

export const FailureAuthenticator = ({
    service,
}: IAuthenticatorComponentProps) => {
    return <button onClick={() => service.handleFailure()}>Failure</button>;
};
