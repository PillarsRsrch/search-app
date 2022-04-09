import React from 'react';
import { IAuthenticationButtonProps } from './IAuthenticationButtonProps';

export const AuthenticationButton = ({
    children,
    onClick,
}: IAuthenticationButtonProps) => (
    <div className="authentication-button" onClick={(e) => onClick(e)}>
        {children}
    </div>
);
