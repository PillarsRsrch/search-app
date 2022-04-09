import React from 'react';
import { IAuthenticatorComponentProps } from '../../../../../src/views/components/authentication/IAuthenticatorComponentProps';

export const FailureAuthenticator = ({
    service,
}: IAuthenticatorComponentProps) => {
    return <button onClick={() => service.handleFailure()}>Failure</button>;
};
