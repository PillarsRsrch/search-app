import React from 'react';
import { Text } from '../../bases/text/Text';
import { AuthenticationButton } from '../../components/authentication/AuthenticationButton';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';

export const AuthenticationPage = ({ children }: IAuthenticationPageProps) => (
    <>
        <Text>Login with google to create a new project</Text>
        <AuthenticationButton onClick={() => null}>
            {children}
        </AuthenticationButton>
    </>
);
