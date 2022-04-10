import React, { useState } from 'react';
import { Text } from '../../bases/text/Text';
import { AuthenticationButton } from '../../components/authentication/AuthenticationButton';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';

export const AuthenticationPage = ({ service }: IAuthenticationPageProps) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    if (isAuthenticated) {
        return (
            <>
                <Text>Successfully authenticated</Text>
                <div className="icon">Check mark</div>
            </>
        );
    } else {
        return (
            <>
                <Text>Login with google to create a new project</Text>
                <AuthenticationButton
                    service={service}
                    onClick={() => {}}
                    onSuccess={() => setAuthenticated(true)}
                    onFailure={() => {}}
                />
            </>
        );
    }
};
