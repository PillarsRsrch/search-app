import React from 'react';
import { IAuthenticationButtonProps } from './IAuthenticationButtonProps';

export const AuthenticationButton = ({
    children,
    onClick,
}: IAuthenticationButtonProps) => (
    <div onClick={(e) => onClick(e)}>{children}</div>
);
