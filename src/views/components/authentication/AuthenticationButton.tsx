import React from 'react';
import { IAuthenticationButtonProps } from './IAuthenticationButtonProps';

export const AuthenticationButton = ({
    children,
    onClick,
}: IAuthenticationButtonProps) => <div onClick={onClick}>{children}</div>;
