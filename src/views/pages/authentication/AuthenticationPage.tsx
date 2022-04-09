import React from 'react';
import { AuthenticationButton } from '../../components/authentication/AuthenticationButton';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';

export const AuthenticationPage = ({ children }: IAuthenticationPageProps) => (
    <AuthenticationButton onClick={() => null}>{children}</AuthenticationButton>
);
