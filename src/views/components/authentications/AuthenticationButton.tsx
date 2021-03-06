import React from 'react';
import { IAuthenticationButtonProps } from './IAuthenticationButtonProps';

export const AuthenticationButton = ({
    service,
    onClick,
    onSuccess,
    onFailure,
}: IAuthenticationButtonProps) => (
    <div className="authentication-button" onClick={(e) => onClick(e)}>
        {service.createAuthenticator(onSuccess, onFailure)}
    </div>
);
