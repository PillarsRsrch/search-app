import React from 'react';
import { IAuthenticationButtonProps } from './IAuthenticationButtonProps';

export const AuthenticationButton = ({
    children,
    onClick,
}: IAuthenticationButtonProps) => (
    <div className="authentication-button" onClick={(e) => onClick(e)}>
        <p>Login with google to create a new project</p>
        {children}
    </div>
);
