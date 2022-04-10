import React, { useState } from 'react';
import { Text } from '../../bases/text/Text';
import { AuthenticationButton } from '../../components/authentication/AuthenticationButton';
import { Icon } from '../../components/icon/Icon';
import { IconSize } from '../../components/icon/IconSize';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';

export const AuthenticationPage = ({
    authenticatorService,
    iconService,
}: IAuthenticationPageProps) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    if (isAuthenticated) {
        return (
            <>
                <Text>Successfully authenticated</Text>
                <Icon
                    name="checkmark"
                    size={IconSize.Small}
                    service={iconService}
                />
            </>
        );
    } else {
        return (
            <>
                <Text>Login with google to create a new project</Text>
                <AuthenticationButton
                    service={authenticatorService}
                    onClick={() => {}}
                    onSuccess={() => setAuthenticated(true)}
                    onFailure={() => {}}
                />
            </>
        );
    }
};
