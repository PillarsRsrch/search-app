import React from 'react';
import { IAuthenticatorComponentProps } from '../../../../../src/views/components/authentications/authenticators/IAuthenticatorComponentProps';

export const FailureAuthenticator = ({
    onFailure,
}: IAuthenticatorComponentProps) => {
    return <button onClick={() => onFailure(new Error())}>Failure</button>;
};
