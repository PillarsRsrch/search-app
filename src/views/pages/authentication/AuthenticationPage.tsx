import React from 'react';
import { Text } from '../../bases/text/Text';
import { AuthenticationButton } from '../../components/authentication/AuthenticationButton';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';

export const AuthenticationPage = ({ service }: IAuthenticationPageProps) => (
    <>
        <Text>Login with google to create a new project</Text>
        <AuthenticationButton
            service={service}
            onClick={() => {}}
            onSuccess={() => {
                console.log('success');
            }}
            onFailure={() => {
                console.log('failure');
            }}
        />
    </>
);
